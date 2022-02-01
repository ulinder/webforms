if(!RULES) throw 'no rules found!'; // koll om rules.js saknas 

RULES.forEach(rule => {
  var targets = document.querySelectorAll(`[name="${rule.trigger}"]`);
  targets.forEach( (target) => {
    target.dataset.target = rule.target;
    target.addEventListener('change', activator);
  })
});

function activator(e){
  const name = e.target.name
  RULES.map( (rule) => { 
    if(rule.trigger === name){
      switch(rule.action){ // välj åtgärd beroende på vilken typ av regel som körs
        case 'show':
          exec_show_rule(rule, e.target)
          break;
        default:
          console.error('rules: out of scope');
      }
    }
  });
}


function exec_show_rule(rule, target){
  var target_div = document.getElementById(rule.target);
  let conditions = rule.cond.map((cond)=>{
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
    target_div.classList.add('collapse');
  }else {
    target_div.classList.remove('collapse');  
  }
  
}

function exec_calculate_rule(rule, target){

}