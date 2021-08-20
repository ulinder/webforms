window.addEventListener('load', function () {
  
  // VARIABLES
  let current_id = "";
  const mini_body = document.getElementById('formbody');


  // TEMPLATES 
  var radio_boolean_template = document.querySelector("#radio_boolean");
  

  // FUNCTIONS
  const new_el = (str, valStr) =>{
    var el = document.createElement(str);
    if(valStr) el.innerHTML = valStr;
    return el; 
  }

  for (var i = 0; i < DATA.length; i++) { // ITERATE ALL BLOCKS

    if(DATA[i].id != null && DATA[i].id != current_id){ // finding block with new ID from previous
      mini_body.append( new_el('hr') );
      current_id = DATA[i].id
    }

    if(DATA[i].subid) mini_body.append( new_el('h3', `${current_id} ${DATA[i].subid}`) )   
    if(DATA[i].title) mini_body.append( new_el('h2', DATA[i].title) ) 
    if(DATA[i].text)  mini_body.append( new_el('p', DATA[i].text ) ) 
    if(DATA[i].rules)  mini_body.append( new_el('h4', DATA[i].rules ) ) 

    if(DATA[i].answer){ 
      var new_radio_boolean = radio_boolean_template.content.cloneNode(true);
      mini_body.append( new_radio_boolean );
    } 
    

  }

});


const answer_ja_nej = (id) => {
  
}
