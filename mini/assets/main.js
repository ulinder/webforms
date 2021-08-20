window.addEventListener('load', function () {
  
  // FUNCTIONS
  const new_el = (str, valStr) =>{
    var el = document.createElement(str);
    if(valStr) el.innerHTML = valStr;
    return el;
  }

  const new_div = (id) => {
    var div = document.createElement('div');
    div.id = `form_field_${id}`;
    div.className = "form_field_div";
    return div;
  }

  // VARIABLES
  var current_id = "";
  const form_div = document.getElementById('form_div');
  var current_div = new_div('init');


  // TEMPLATES 
  var radio_boolean_template = document.querySelector("#radio_boolean");
  

  // DATA ITERATION
  for (var i = 0; i < DATA.length; i++) {

    if(DATA[i].id != null && DATA[i].id != current_id)
    { // When ID changes = asuming new question
      current_id = DATA[i].id
      current_div = new_div(current_id);
    } 

    if(DATA[i].subid) form_div.append( new_el('h3', `${current_id} ${DATA[i].subid}`) )   
    if(DATA[i].title) form_div.append( new_el('h2', DATA[i].title) ) 
    if(DATA[i].text)  form_div.append( new_el('p', DATA[i].text ) ) 
    // if(DATA[i].rules)  current_div.append( new_el('h4', DATA[i].rules ) )

    if(DATA[i].answer){ 
      var new_radio_boolean = radio_boolean_template.content.cloneNode(true);
      new_radio_boolean.getElementById('radio_pair_ja').name = `radio_pair_${i}`
      new_radio_boolean.getElementById('radio_pair_ja').id = `radio_pair_ja_${i}`
      new_radio_boolean.getElementById('radio_pair_nej').name = `radio_pair_${i}`
      new_radio_boolean.getElementById('radio_pair_nej').id = `radio_pair_nej_${i}`
      form_div.append( new_radio_boolean );
    } 
    


  }

});
