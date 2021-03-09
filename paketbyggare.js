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


NAMES = ["anamnes-affektiva-v2", "audit-c", "dudit-ed", "whodas-36"];    // Affektiva
// NAMES = ["anamnes-bipolar", "audit-c", "dudit", "wurs", "asrs", "raads-14", "as-18", "scid-ii"]; // Bipolar
// NAMES = ["phq-9","gad-7","audit","dudit"]; // AoB

F.base.name = "Paket: " + NAMES.join(", ");

for(var i = 0; i < NAMES.length; i++){

    form = JSON.parse( fs.readFileSync( path.join(WEBFORMS_ROOT, 'vault', NAMES[i] + '.json'), 'utf8' ) );
    fe = new FormExtractor(form, NAMES[i]);
    this_form = fe.form_all(); 

    F.base.minNumberOfQuestions = F.base.minNumberOfQuestions + fe.formObj.minNumberOfQuestions;
    F.base.maxNumberOfQuestions = F.base.maxNumberOfQuestions + fe.formObj.maxNumberOfQuestions;


    // ALIGN CALCULATIONS
    this_form.body.calculationFormulas.map( (ruleblock)=>{
      ruleblock.subject = NAMES[i] +": "+ ruleblock.subject
      ruleblock.formula = ruleblock.formula
      .split("\"").join("'")
      .split("\“").join("'")
      .split(/get\(\'q/).join("get('"+NAMES[i]+"-q")
      .split("$").join("");  
      F.base.calculationFormulas.push(ruleblock);
    }); // MAP 

    // Align page number with whole array

    this_form.body.pages[0].page.subject = this_form.body.name;
    this_form.body.pages.map( page => F.base.pages.push(page) ); 
    
} // END NAMES LOOP

// Re-index pages  
F.base.pages.map( (page, index) => {
  F.base.pages[index].page.pageNumber = index + 1;
});

F.base.maxNumberOfPages = F.base.pages.length;
F.base.minNumberOfPages = F.base.maxNumberOfPages;

wf("testpaket.json", JSON.stringify(F.base) );

// write auto test file
feDone = new FormExtractor(F.base, "testpaket");

wf("testfiles/testpaket_testfile.yaml", YAML.stringify({url: "", beskrivning:"", frågor: feDone.form_all().test } ));
