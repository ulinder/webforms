if(!RULES) throw 'no rules found!'; // koll om rules.js saknas 

console.log('Initiate rules engine');

results = {}

RULES.forEach(rule => {
  var targets = document.querySelectorAll(`[name="${rule.name}"]`);
  targets.forEach( (target) => {
    
    target.dataset.target = rule.target;
    target.addEventListener('change', activator);
    
  })
});

function activator(e){

  const name = e.target.name
  RULES.map( (rule) => { // hitta och aktivera de regler som gäller för det aktiverade elementet
    if(rule.name === name){
      switch(rule.type){ // välj åtgärd beroende på vilken typ av regel som körs
        case 'display':
          exec_display_rule(rule, e.target)
          break;
      } 
    }
  });
}


function exec_display_rule(rule, target){
  console.log('Exec the display rule');
  target_div = document.getElementById(rule.c.target);
  console.log(target_div);
  if(target.value == rule.c.targetValue){
    console.log('Fits the rule');
    target_div.classList.remove('collapse');
  } 
  else {
    target_div.classList.add('collapse');
  }
}

function exec_calculate_rule(rule, target){

}