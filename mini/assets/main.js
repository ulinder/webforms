// window.addEventListener('load', function () { // Detta körs när sidan indikerar att den laddat klart

//   $.getJSON( 'out.json', (obj)=>{
//     console.log(obj);
//   } )
  
// })

$(document).ready(()=>{

  console.log('Write json content')
  for (var i = 0; i < DATA.length; i++) {

    if(DATA[i].title){ $("#formbody").append(`<h2>${DATA[i].title}</h2>`); }
    
    if(DATA[i].id){ $("#formbody").append(`<h2>${DATA[i].id}</h2>`); }
    
    if(DATA[i].subid){ $("#formbody").append(`<h3>${DATA[i].subid}</h3>`); }
    
    
    if(DATA[i].text){ $("#formbody").append(`<p>${DATA[i].text}</p>`); }

    if(DATA[i].answer){ $("#formbody").append(`<input type="radio" name="radio${i}"> NEJ <input type="radio" name="radio${i}"> JA`); }

  }

});