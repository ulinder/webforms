if(!RULES) throw 'no rules found!'; // koll om rules.js saknas 

// Validering av regler innan körning
RULES.map( (rule)=>{
  if(!(typeof rule.trigger[0] === 'string')) console.error('Fel i rules.js - Trigger för: ', rule, ' är inte en korrekt sträng');
  if(!(Array.isArray(rule.cond[0]))) console.error('Fel i rules.js - cond för: ', rule, ' är inte en array med array enligt [[],[],...]');
  if(!(Array.isArray(rule.target))) console.error('Fel i rules.js - target för: ', rule, ' är inte en array.');
});


var DEBUG;
// DEBUG-MODE - aktivera genom att sätta => mini.html?debug=true
const urlparams = new URLSearchParams(window.location.search)
if(urlparams.get('debug')){ 
  console.log('Debug mode ON');
  DEBUG = true;
  document.getElementById('infobox').classList = "";
  if(urlparams.get('yesuntil') && urlparams.get('yesuntil').length > 1 ){
    const YESUNTIL = urlparams.get('yesuntil');
  }
}

RULES.forEach(rule => {
  var trigger_elements = document.querySelectorAll(`[name="${rule.trigger}"]`);
  trigger_elements.forEach( (trigger_element) => {
    if( DEBUG && trigger_element.value == 1 ) trigger_element.setAttribute('checked','true'); // DEBUG MODE
    trigger_element.dataset.target = rule.target;
    trigger_element.addEventListener('change', activator);
    if( DEBUG && trigger_element.value == 1 ) activator({target: {name: rule.trigger}});   // DEBUG MODE
  })
});

function activator(e){
  const name = e.target.name // name of element, eg name of radio
  RULES.map( (rule) => { 
    if(rule.trigger === name){
      switch(rule.action){ // välj åtgärd beroende på vilken typ av regel som körs
        case 'show':
          exec_show_rule(rule)
          break;
        default:
          console.error('rule action: out of scope');
      }
    }
  });
}


function exec_show_rule(rule){ 
  // var target_div = document.getElementById(rule.target);
  let conditions = rule.cond.map((cond)=>{ // cond:[ ["a1a", "<", 2] ], // look at comparison operator: <, >, ==
    try {
      console.log(cond[0], "from rule: ", rule);
      let this_element = document.querySelector(`[name=${cond[0]}]:checked`);
      if(!this_element){
        console.log( cond[0], " is not found as name, will return false" );
        return false;
      }
      let compare_value = this_element.value;
  
      // Make sure that the string doesn't contain any executable code by checking
      // it against a whitelist of allowed comparison operators.
      if (['<', '>', '<=', '>=', '==', '!='].indexOf(cond[1]) == -1){
        console.log(cond[1], 'is a bad operator and will return false');
        return false;
      }
  

      if (eval(compare_value + cond[1] + cond[2])) return true;
      
    } catch (error) {
      console.error(error);   
    }

  });

  // Testa ifall någon av conditions innehåller en false - om true SÅ faller regeln.  
  if( conditions.some(test => test === false) ){
    rule.target.forEach((target_div)=> document.getElementById(target_div).classList.add('collapse'));
  } else {
    rule.target.forEach((target_div)=> document.getElementById(target_div).classList.remove('collapse'));
  }
  
}


function exec_calculate_rule(rule, target){

}


function assert(a, op, b)  //  Function assess truth to statement
{

}