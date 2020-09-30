WEBFORMS_ROOT = __dirname;

// MENY - Här görs alla inställningar för körningen
SHOW_MENU = 0   // Visa överblick över alla frågor och svarsalternativ 
SHOW_FORM = 1   // Visa hela formuläret 
WRITE_FILE = 0
ADD_TIMESTAMP = 0
ADDED_RULES = "hälsoformuläret.js"
// 


var fs = require('fs');
var form = require('./lib/parse.js');



var ruleArray = require('./rules/'+ADDED_RULES)


const buildCalculationFormulas = (ruleArray) =>{
    return ruleArray.map( (ruleObject)=> {
      ruleObject.license = null;
      ruleObject.type = "inera:form-engine:drools-java:1";
      ruleObject.formula = buildFormula(ruleObject.formula);
      return ruleObject;
    });
}

const buildFormula = (formula) => {
  // Return a final formatted string
  let initial = "when\n q: Questions()\nthen\n";
  return initial + formula.join("\n") + "\nend";
}


// Attach new rules:
form.calculationFormulas = buildCalculationFormulas(ruleArray);

// DEMO how ids are set to questions
if(SHOW_FORM){ console.log(form); }

if(WRITE_FILE==true){
  fs.writeFile(__dirname + '/output.json', 
  JSON.stringify(form), 
  'utf8', 
  (err)=>{console.log("File written");}
  );
}

console.log('end of script');