window.addEventListener('load', function () {
  
  var current_id = "";
  var target_div = document.getElementById('formbody');

  for (var i = 0; i < DATA.length; i++) {

    if(DATA[i].id != null && DATA[i].id != current_id){ // new ID-block
      // target_div.innerHTML = target_div.innerHTML + `<hr>`);
      target_div.innerHTML = target_div.innerHTML + '<hr>';
      current_id = DATA[i].id
    }

    if(DATA[i].subid){ target_div.innerHTML = target_div.innerHTML + `<h3>${current_id} ${DATA[i].subid}</h3>` }
    
    if(DATA[i].title){ target_div.innerHTML = target_div.innerHTML + `<h2>${DATA[i].title}</h2>` }
      
    if(DATA[i].text){ target_div.innerHTML = target_div.innerHTML + `<p>${DATA[i].text}</p>` }

    if(DATA[i].answer){ target_div.innerHTML = target_div.innerHTML + `<input type="radio" name="radio${i}"> NEJ <input type="radio" name="radio${i}"> JA` }

  }

});
