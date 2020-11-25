let question_id, total_question_counter = 1, test_form = []

var fs = require('fs'), form = {}, path = require('path')
const YAML = require('yaml')
let inputs = fs.readdirSync(WEBFORMS_ROOT + '/input')

if(POINTED.length > 0){
  console.log('Reading: ', path.join(WEBFORMS_ROOT, 'vault', POINTED));
  form = JSON.parse( fs.readFileSync( path.join(WEBFORMS_ROOT, 'vault', POINTED), 'utf8' ) );
}
else if(inputs.length == 1){
  console.log('Reading: ', path.join(WEBFORMS_ROOT, 'input', inputs[0]));
  form = JSON.parse( fs.readFileSync( path.join(WEBFORMS_ROOT, 'input', inputs[0]), 'utf8' ) );
}else{
  throw 'too many files in input folder';
}

// Adding timestamp to name
if(ADD_TIMESTAMP) form.name = form.name +'_'+ new Date().toISOString();

// Collect all questions and generate IDS
for(let page_index in form.pages){
  let p = form.pages[page_index].page
  
  if(SHOW_MENU) console.log(p.pageNumber, p.subject, "__________________________________________________________________"); 

  test_form.push({type:'page', id: p.pageNumber}) // add page break to test_form

  for(let block_index in p.questionBlocks){
    let block = p.questionBlocks[block_index]
    for(let question_index in block.questions){
      let question = block.questions[question_index]
      if(FORMAT_IDS == "plain"){
        question_id = 'q' + total_question_counter
      }
      else
      {  
              question_id = (
                (Number(page_index) +1).toString() + "." +
                (Number(block_index) +1).toString() + "." +
                (Number(question_index) +1).toString() 
              );
      }
      
      // Set Ja=1, Nej/other=0 THROWN
      // if(question.input ==='radio'){
      //   question.answerAlternatives.map((q, i)=> { 
          
      //     let this_number = q.number;
      //     if(q.value ==='Ja'){ this_number = 1 }
      //     if(q.value ==='Nej'){ this_number = 0 }

      //     form
      //       .pages[page_index]
      //       .page.questionBlocks[block_index]
      //       .questions[question_index]
      //       .answerAlternatives[i]
      //       .number = this_number;
      //    })
      // }
      
      let current_alternatives = question.answerAlternatives.map((q)=> {return `värde: ${q.number}, text: ${q.value}` })
      // PRINT Index list 
      if(SHOW_MENU){ console.log( question_id, question.subject, "\n", current_alternatives ); }
      test_form.push({type:'question', id:question_id, testValue: 1})

      // Setting automatic IDS
      form
        .pages[page_index]
        .page.questionBlocks[block_index]
        .questions[question_index]
        .questionId = question_id;
    
      total_question_counter++;
    } 

  }
}

if(GIVE_TEST_FRAMEWORK){

  console.log( YAML.stringify(test_form) );
  fs.writeFile( OUTPUT_DIR + form.name + '_testfile.yml', 
  YAML.stringify(test_form), 
  'utf8', 
  (err)=>{console.log(err);}
  );


}

module.exports = form;
