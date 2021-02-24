module.exports = class FormExtractor{
  constructor(formObj, sysname, rulesObj){
    if(!formObj) throw new Error("ingen form-data angiven");
    if(!sysname) throw new Error("Ange ett systemsäkert namn");
    this.formObj = formObj;
    this.sysname = sysname;
    this.rulesObj = rulesObj;
    this.form_meta = { test: [], menu: [], body: null };    
  }

  buildCalculationObj(){
    if(!this.rulesObj) throw new Error("ingen regeldata angiven");
      return this.rulesObj.map( (ruleObject)=> {
        ruleObject.license = null;
        ruleObject.type = "inera:form-engine:drools-java:1";
        ruleObject.formula =  "when\n q: Questions()\nthen\n" + ruleObject.formula + "\nend";
        return ruleObject;
      });
  }

  form_all(){

      var question_id, 
      total_question_counter = 1, 
      form = this.formObj,
      test_arr = [],
      menu_arr = [];

      // Adding timestamp to name
      // if(ADD_TIMESTAMP) form.name = form.name +'_'+ new Date().toISOString().split("T")[0];

      // Collect all questions and generate IDS
      for(let page_index in form.pages){
        let p = form.pages[page_index].page
        
        menu_arr.push(p.pageNumber, p.subject, "__________________________________________________________________"); 
        test_arr.push({type:'page', id: p.pageNumber}) // add page ID

        for(let block_index in p.questionBlocks){
          let block = p.questionBlocks[block_index]
          for(let question_index in block.questions){
            let question = block.questions[question_index]
            question_id = this.sysname +'-q' + total_question_counter
                  
            let current_alternatives = question.answerAlternatives.map((q)=> {return `värde: ${q.number}, text: ${q.value}` })
            
            menu_arr.push( question_id, question.subject, current_alternatives ); 
            test_arr.push({type:'question', id:question_id, testValue: 1})

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
      
      total_question_counter--; // decrease one step since loop adds one initial
      form.minNumberOfQuestions = total_question_counter; 
      form.maxNumberOfQuestions = total_question_counter; 

      if(this.rulesObj) form.calculationFormulas = this.buildCalculationObj(); // add rules if existing 

      this.form_meta.body = form;
      this.form_meta.test = test_arr;
      this.form_meta.menu = menu_arr;
      return this.form_meta;

  }


}

