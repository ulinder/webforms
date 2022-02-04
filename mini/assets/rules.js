// Regler för mini - 
// trigger:"name" - namnet på den input som ska aktivera regeln. Ex vid klick eller input.
// cond:[] - block av test som ska vara sanna 

RULES = [

  { trigger:"a1a", cond:[ ["a1a","<",2] ], action:"show", target:["div_a1b"]},
  { trigger:"a1b", cond:[ ["a1b","<",2] ], action:"show", target:["div_a2a"]},
  { trigger:"a2a", cond:[ ["a2a","<",2] ], action:"show", target:["div_a2b"]},
  { trigger:"a2b", cond:[ ["a1a","==",0] , ["a2a","==",0] ], action:"show", target:["div_b1"]},
  { trigger:"a2b", cond:[ ["a1a","==",1] , ["a2a","==",1], ["a1b","==",1] , ["a2b","==",1] ], action:"show", target:['div_intro_a3','div_a3a','div_a3a_2w','div_a3a_prev']},
  { trigger:"a3a_2w", cond:["a3a_2w","<",2], action:"show", target:['div_intro_a3','div_a3b','div_a3b_2w','div_a3b_prev']},
  { trigger:"a3b_2w", cond:["a3b_2w","<",2], action:"show", target:['div_intro_a3','div_a3c','div_a3c_2w','div_a3c_prev']},
  { trigger:"a3c_2w", cond:["a3c_2w","<",2], action:"show", target:['div_intro_a3','div_a3d','div_a3d_2w','div_a3d_prev']},
  { trigger:"a3d_2w", cond:["a3d_2w","<",2], action:"show", target:['div_intro_a3','div_a3e','div_a3e_2w','div_a3e_prev']},
  { trigger:"a3e_2w", cond:["a3e_2w","<",2], action:"show", target:['div_intro_a3','div_a3f','div_a3f_2w','div_a3f_prev']},
  { trigger:"a3f_2w", cond:["a3f_2w","<",2], action:"show", target:['div_intro_a3','div_a3g','div_a3g_2w','div_a3g_prev']},
  { trigger:"a3g_2w", cond:["a3g_2w","<",2], action:"show", target:['div_intro_a3','div_a4','div_a4_2w','div_a4_prev']},
  { trigger:"a4_2w", cond:["a4_2w","<",2], action:"show", target:['div_intro_a3','div_a5','div_a5_2w','div_a5_prev']},
  { trigger:"a5_2w", cond:["a5_2w","<",2], action:"show", target:['div_a6a']},
  
  { trigger:"a2b", cond:[ ["a1a","==",1] , ["a2a","==",1], ["a1b","==",0] , ["a2b","==",0] ], action:"show", target:['div_intro_a3','div_a3a','div_a3a_prev']},
  { trigger:"a3a_2w", cond:[ ["a3a_2w","==","undefined"], ["div_a3a_prev","<",2] ], action:"show", target:['div_intro_a3','div_a3b',,'div_a3b_prev']},
  { trigger:"a3b_2w", cond:[ ["a3b_2w","==","undefined"], ["div_a3b_prev","<",2] ], action:"show", target:['div_intro_a3','div_a3c',,'div_a3c_prev']},
  { trigger:"a3c_2w", cond:[ ["a3c_2w","==","undefined"], ["div_a3c_prev","<",2] ], action:"show", target:['div_intro_a3','div_a3d',,'div_a3d_prev']},
  { trigger:"a3d_2w", cond:[ ["a3d_2w","==","undefined"], ["div_a3d_prev","<",2] ], action:"show", target:['div_intro_a3','div_a3e',,'div_a3e_prev']},
  { trigger:"a3e_2w", cond:[ ["a3e_2w","==","undefined"], ["div_a3e_prev","<",2] ], action:"show", target:['div_intro_a3','div_a3f',,'div_a3f_prev']},
  { trigger:"a3f_2w", cond:[ ["a3f_2w","==","undefined"], ["div_a3f_prev","<",2] ], action:"show", target:['div_intro_a3','div_a3g',,'div_a3g_prev']},
  { trigger:"a3g_2w", cond:[ ["a3g_2w","==","undefined"], ["div_a3g_prev","<",2] ], action:"show", target:['div_intro_a3','div_a4','div_a4_prev']},
  { trigger:"a4_2w", cond:[ ["a4_2w","==","undefined"], ["div_a4_prev","<",2] ], action:"show", target:['div_intro_a3','div_a5','div_a5_prev']},
  { trigger:"a5_2w", cond:[ ["a5_2w","==","undefined"], ["div_a5_prev","<",2] ], action:"show", target:['div_a6a']},

]
