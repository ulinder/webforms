var fs = require('fs');
const YAML = require('yaml');

// Write some stats of the form
console.log("Number of questions: ", form.maxNumberOfQuestions );
console.log("Number of rules in form: ", form.calculationFormulas.length );
console.log("Names of rules in form: ", form.calculationFormulas.map( x => x.subject ) );


// DEMO how ids are set to questions
if(SHOW_FORM) console.log(form); 

if(TEST_FILE){
  fs.writeFile( OUTPUT_DIR + NAME + '_testfile.yml', 
  YAML.stringify(test_form), 
  'utf8', 
  (err)=>{console.log(err);}
  );
}

if(SHOW_MENU){
  fs.writeFile( OUTPUT_DIR + NAME + '_meny.txt', 
  YAML.stringify(menu_form), 
  'utf8', 
  (err)=>{console.log("Menu errors: ",err);}
  );
}

if(SHOW_RULES){
  fs.writeFile( OUTPUT_DIR + NAME + '_rules.txt', 
  YAML.stringify(form.calculationFormulas), 
  'utf8', 
  (err)=>{console.log("Rule print errors: ",err);}
  );
}

if(WRITE_FILE){
  fs.writeFile(OUTPUT_DIR + NAME + '.json', 
  JSON.stringify(form), 
  'utf8', 
  (err)=>{console.log("Error: ", err);}
  );
}

console.log('end of script');
