/* 

INFO
Förutsätter att de enskilda testen har fungerande regler kopplade till sig.
Scriptet döper om reglerna och alla ID för att bli unika i paketet

*/

// Ange vilka skattningar som ska ingå i NAMES
// NAMES = ["anamnes-affektiva-v2", "audit-c", "dudit-ed", "whodas-36"]; // Affektiva
// NAMES = ["phq-9","gad-7","audit","dudit"]; // AoB
NAMES = ["thancs_intro", "sweaa", "ede-q", "madrs-s", "audit", "dudit-e", "gad-7", "aq", "asrs-nodate", "adhd-rs" ] // Thancs Bullimi 
// NAMES = ["anamnes-bipolar", "audit-c", "dudit", "asrs", "raads-14", "whodas-36"]; // Bipolar

// Give this bundle a name
BUNDLENAME = "THANCS-paket-v3"

require('./constants.js');
const YAML = require('yaml');
var fs = require('fs');
var path = require('path');
var FormExtractor = require('./lib/form_extractor.js');
var wf = require('./lib/write_file.js');
var form; 
var this_form;

var F = {
  base: JSON.parse( fs.readFileSync( path.join(WEBFORMS_ROOT, 'partials', 'base' + '.json'), 'utf8' ) ),
  page: JSON.parse( fs.readFileSync( path.join(WEBFORMS_ROOT, 'partials', 'page' + '.json'), 'utf8' ) ),
  questionBlock: JSON.parse( fs.readFileSync( path.join(WEBFORMS_ROOT, 'partials', 'questionBlock' + '.json'), 'utf8' ) ),
  question: JSON.parse( fs.readFileSync( path.join(WEBFORMS_ROOT, 'partials', 'question' + '.json'), 'utf8' ) ),
  answerAlternative: JSON.parse( fs.readFileSync( path.join(WEBFORMS_ROOT, 'partials', 'answer_alternative' + '.json'), 'utf8' ) )
}

F.base.name = "Paket: " + NAMES.join(", ");

var total_change_log = [];

for(var i = 0; i < NAMES.length; i++){

    form = JSON.parse( fs.readFileSync( path.join(WEBFORMS_ROOT, 'vault', NAMES[i] + '.json'), 'utf8' ) );
    fe = new FormExtractor(form, NAMES[i], 1);
    this_form = fe.formObj;

    F.base.minNumberOfQuestions = F.base.minNumberOfQuestions + fe.formObj.minNumberOfQuestions;
    F.base.maxNumberOfQuestions = F.base.maxNumberOfQuestions + fe.formObj.maxNumberOfQuestions;


    // ALIGN CALCULATIONS
    fe.formObj.calculationFormulas.map( (ruleblock)=>{
      ruleblock.subject = NAMES[i] +": "+ ruleblock.subject
      ruleblock.calculationId = NAMES[i] +": "+ ruleblock.calculationId
      ruleblock.formula = ruleblock.formula
      .split("\"").join("'")
      .split("\“").join("'")
      .split(/get\(\'q/).join("get('"+ NAMES[i].toLowerCase()+"-q")
      .split("$").join("");
      F.base.calculationFormulas.push(ruleblock);
    }); // MAP

    fe.body.pages[0].page.subject = fe.body.name;
    fe.body.pages.map( page => F.base.pages.push(page) ); 
    total_change_log.push(...fe.change_log);
    
} // END NAMES LOOP

// Re-index pages  
F.base.pages.map( (page, index) => {
  F.base.pages[index].page.pageNumber = index + 1;
});

F.base.maxNumberOfPages = F.base.pages.length;
F.base.minNumberOfPages = F.base.maxNumberOfPages;

wf( BUNDLENAME+".json", JSON.stringify(F.base) );
wf( BUNDLENAME+"_changelog", total_change_log.join("\n"));
console.log("New pack created: ", BUNDLENAME)
