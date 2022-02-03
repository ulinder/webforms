// Regler för mini - 
// trigger:"name" - namnet på den input som ska aktivera regeln. Ex vid klick eller input.
// cond:[] - block av test som ska vara sanna 

RULES = [

  { trigger:"a1a", cond:[ ["a1a","<",2] ], action:"show", target:["div_a1b"]},
  { trigger:"a1b", cond:[ ["a1b","<",2] ], action:"show", target:["div_a2a"] },
  { trigger:"a2a", cond:[ ["a2a","<",2] ], action:"show", target:["div_a2b"]},
  { trigger:"a2b", cond:[ ["a1a","==",0] , ["a2a","==",0]], action:"show", target:["div_b1"]},
  { trigger:"a2b", cond:[ ["a1b","==",1] , ["a2b","==",1]], action:"show", target:["div_a3"]},

]
