if(!RULES) throw 'no rules found!'; // koll om rules.js saknas 

RULES.forEach(rule => {
  var trigger_elements = document.querySelectorAll(`[name="${rule.trigger}"]`);
  trigger_elements.forEach( (trigger_element) => {
    trigger_element.dataset.target = rule.target;
    trigger_element.addEventListener('change', activator);
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
          console.error('rules: out of scope');
      }
    }
  });
}


function exec_show_rule(rule){ 
  // var target_div = document.getElementById(rule.target);
  let conditions = rule.cond.map((cond)=>{ // look at comparison operator: <, >, ==
    switch(cond[1]){
      case '==':
        return document.querySelector(`[name=${cond[0]}]:checked`).value == cond[2];
        break;
      default:
        console.error('Conditions - out of scope');
    }
  });
  // Testa ifall någon av conditions innehåller en false - om true SÅ faller regeln.  
  if( conditions.some(test => test === false) ){
    rule.target.forEach((target_div)=> document.getElementById(target_div).classList.add('collapse'));
  }else {
    rule.target.forEach((target_div)=> document.getElementById(target_div).classList.remove('collapse'));
  }
  
}

function exec_calculate_rule(rule, target){

}