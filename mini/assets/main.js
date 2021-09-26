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
  var current_id = "", 
      sub_id = "",
      full_id,
      current_div = new_div('init');

  const form_div = document.getElementById('form_div');


  // TEMPLATES 
  var radio_boolean_template = document.querySelector("#radio_boolean");
  

  // DATA ITERATION
  for (var i = 0; i < DATA.length; i++) {

    if(DATA[i].id != null && DATA[i].id != current_id)
    { // When ID changes = asuming new question
      current_id = DATA[i].id
      current_div = new_div(current_id);
    } 
    
    full_id = ( current_id + DATA[i].subid ).replace(" ","");

    if(DATA[i].subid) form_div.append( new_el('h3', `${current_id} ${DATA[i].subid}`) )   
    if(DATA[i].title) form_div.append( new_el('h2', DATA[i].title) ) 
    if(DATA[i].text)  form_div.append( new_el('p', DATA[i].text ) ) 
    // if(DATA[i].rules)  current_div.append( new_el('h4', DATA[i].rules ) )

    if(DATA[i].answer){ 
      var new_radio_boolean = radio_boolean_template.content.cloneNode(true);
      new_radio_boolean.getElementById('radio_pair_ja').name = full_id;
      new_radio_boolean.getElementById('radio_pair_ja').id = `${full_id}_ja`
      new_radio_boolean.getElementById('radio_pair_nej').name = full_id;
      new_radio_boolean.getElementById('radio_pair_nej').id = `${full_id}_nej`
      form_div.append( new_radio_boolean );
    } 
    


  }

});
