WEBFORMS_ROOT = __dirname;
OUTPUT_DIR = __dirname + '/output/';
// MENY - Här görs alla inställningar för körningen
SHOW_MENU = 0   // Visa överblick över alla frågor och svarsalternativ 
SHOW_FORM = 0   // Visa hela formuläret 
GIVE_TEST_FRAMEWORK = 1
WRITE_FILE = 0
ADD_TIMESTAMP = 1

// plain: ex q12 / complex: 1.2.12
FORMAT_IDS = "plain"
POINTED = "aq-v1.json"
ADD_RULES = "aq.js"


var fs = require('fs');
var form = require('./lib/parse.js');

var ruleArray = require('./rules/' + ADD_RULES)


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
  fs.writeFile(OUTPUT_DIR + form.name + '.json', 
  JSON.stringify(form), 
  'utf8', 
  (err)=>{console.log("File written");}
  );
}

console.log('end of script');
