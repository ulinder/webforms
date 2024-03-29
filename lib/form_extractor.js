module.exports = class FormExtractor{
  constructor(formObj, sysname, id_format, rulesObj){
    if(!formObj) throw new Error("ingen form-data angiven");
    if(!sysname) throw new Error("Ange ett systemsäkert namn");
    if(!id_format) throw new Error("Ange ID-format i 3e parametern. Format: '1=plain', '2=fqpn' ");
    this.id_format = id_format;
    this.formObj = formObj;
    this.sysname = sysname;
    this.rulesObj = rulesObj;
    this.body = "";
    this.menu = [];
    this.change_log = [];
    this.question_ids = [];
    this.form_convert();
    this.giveSummaryRule();
    console.log('Initialize:', sysname);
  }

  giveSummaryRule(){
    return this.question_ids.map( id => `  (q.get('${id}',1)-1)+` ).join("\n")
  }

  buildCalculationObj(){
    if(!this.rulesObj) throw new Error("ingen regeldata angiven");
      return this.rulesObj.map( (ruleObject)=> {
        if(typeof(ruleObject.formula) === "Array") ruleObject.formula = ruleObject.formula.join("\n"); // sometimes was a string or array
        ruleObject.license = null;
        ruleObject.type = "inera:form-engine:drools-java:1";
        ruleObject.formula =  "when\n q: Questions()\nthen\n" + ruleObject.formula + "\nend";
        return ruleObject;
      });
  }

  form_convert(){

      var question_id, 
      total_question_counter = 1, 
      form = this.formObj,
      test_arr = [],
      old_id = "",
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
            // want to check if questionId has value
            question_id = (this.id_format == 1) ? 
              this.sysname +'-q' + total_question_counter :
              `${this.sysname}-${ parseInt(p.pageNumber)+1 }.${ parseInt(block_index)+1}.${ parseInt(question_index)+1}`;
            this.question_ids.push(question_id);
            let current_alternatives = question.answerAlternatives.map((q)=> {return `värde: ${q.number}, text: ${q.value}` })
            
            menu_arr.push( question_id, question.subject, current_alternatives ); 
            test_arr.push({type: question.input, id:question_id, testValue: question.answerMin || 1 })

            // Set automatic IDS
            old_id = form
            .pages[page_index]
            .page.questionBlocks[block_index]
            .questions[question_index]
            .questionId;

            // if(old_id && old_id.length > 0) console.log(`${this.sysname} ${old_id} => ${question_id}`);
            if(old_id && old_id.length > 0) this.change_log.push(`${old_id} => ${question_id}`);
            
            // Set automatic IDS
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

      this.body = form;
      this.test = test_arr;
      this.menu = menu_arr;
  }


}

