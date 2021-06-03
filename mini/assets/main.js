window.addEventListener('load', function () {
  
  var current_id = "";
  var target_div = document.getElementById('formbody');

  var new_el = (str, valStr) =>{
    var el = document.createElement(str);
    if(valStr) el.innerHTML = valStr;
    return el; 
  }

  for (var i = 0; i < DATA.length; i++) {

    if(DATA[i].id != null && DATA[i].id != current_id){ // new ID-block
      target_div.append( new_el('hr') );
      current_id = DATA[i].id
    }

    if(DATA[i].subid) target_div.append( new_el('h3', `${current_id} ${DATA[i].subid}`) )   
    if(DATA[i].title) target_div.append( new_el('h2', DATA[i].title) ) 
    if(DATA[i].text)  target_div.append( new_el('p', DATA[i].text ) )  
    if(DATA[i].answer){ target_div.append( new_el('p','JA/NEJ') ) } // `<input type="radio" name="radio${i}"> NEJ <input type="radio" name="radio${i}"> JA` }

  }

});
