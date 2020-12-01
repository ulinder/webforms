var fs = require('fs');
var form = require('./parse.js');
var ruleArray = require(WEBFORMS_ROOT+'/rules/' + NAME +'.js');

const buildCalculationFormulas = (ruleArray) =>{
    return ruleArray.map( (ruleObject)=> {
      ruleObject.license = null;
      ruleObject.type = "inera:form-engine:drools-java:1";
      ruleObject.formula = buildFormula(ruleObject.formula);
      return ruleObject;
    });
}

const buildFormula = (formula) => {
  // Return a final formatted rule string
  return "when\n q: Questions()\nthen\n" + formula + "\nend";
}

// Attach new rules:
form.calculationFormulas = buildCalculationFormulas(ruleArray);

// DEMO how ids are set to questions
if(SHOW_FORM){ console.log(form); }

if(WRITE_FILE==true){
  fs.writeFile(OUTPUT_DIR + form.name + '.json', 
  JSON.stringify(form), 
  'utf8', 
  (err)=>{console.log("File written");}
  );
}

console.log('end of script');
