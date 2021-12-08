SHOW_MENU =        1                   // Visa överblick över alla frågor och svarsalternativ 
SHOW_RULES =       0                   // Printa ut alla regler 
ADD_RULES =        1                   // Addera regler vid inläsningen från rules-mappen
SHOW_FORM =        0                   // Visa hela formuläret 
TEST_FILE =        0                   // Printa ut fil för automatiserad testning
WRITE_FILE =       1                   // Skriv ut 
ADD_TIMESTAMP =    1                   // addera datum på filnamnet ex AQ-2020-11-12.json
FORMAT_IDS =       "plain"             // plain: ex q12 / complex: 1.2.12
NAME =             "dudit-e-v2-export" // Namn på testet, utan ändelse tex AQ, inte AQ.json

require('./constants.js');
var fs = require('fs'),
    path = require('path'),
    FormExtractor = require('./lib/form_extractor.js');
    wf = require('./lib/write_file.js');

var F = {
  base: JSON.parse( fs.readFileSync( path.join(WEBFORMS_ROOT, 'partials', 'base' + '.json'), 'utf8' ) ),
  page: JSON.parse( fs.readFileSync( path.join(WEBFORMS_ROOT, 'partials', 'page' + '.json'), 'utf8' ) ),
  questionBlock: JSON.parse( fs.readFileSync( path.join(WEBFORMS_ROOT, 'partials', 'questionBlock' + '.json'), 'utf8' ) ),
  question: JSON.parse( fs.readFileSync( path.join(WEBFORMS_ROOT, 'partials', 'question' + '.json'), 'utf8' ) ),
  answerAlternative: JSON.parse( fs.readFileSync( path.join(WEBFORMS_ROOT, 'partials', 'answer_alternative' + '.json'), 'utf8' ) )
}

function deepCopy(obj){ // make a deep copy
  return JSON.parse(JSON.stringify(obj));
}


// Start from inner and add outwards
let answers = ["Ingen", "Liten", "Måttlig", "Stor", "Extrem/kan inte"];

let def_alternatives = [];

for(let i=0; i<answers.length; i++){
  alt = deepCopy(F.answerAlternative);
  alt.number = (i+1);
  alt.value = answers[i];
  def_alternatives[i] = alt;
}

let allQuestions = [
  "@t Förstå och kommunicera",
  "Koncentrera dig under tio minuter på att göra något?",
  "Komma ihåg att göra viktiga saker? ",
  "Analysera och finna lösningar på problem i det dagliga livet?",
  "Lära dig en ny uppgift, (till exempel hur man tar sig till en ny plats)?",
  "För det mesta förstå vad människor säger?",
  "Påbörja och hålla igång ett samtal? ",
  "@t Förflyttning",
  "Stå under längre perioder såsom 30 minuter?",
  "Resa dig från sittande ställning? ",
  "Röra dig i ditt hem? ",
  "Ta dig ut från ditt hem? ",
  "Gå en längre sträcka såsom en kilometer?",
  "@t Personlig vård",
  "Tvätta hela kroppen? ",
  "Klä dig? ",
  "Äta? ",
  "Vara ensam under några dagar? ",
  "@t Relationer",
  "Bemöta människor som du inte känner?",
  "Bibehålla en vänskapsrelation? ",
  "Komma överens med människor som står dig nära?",
  "Skaffa nya vänner? ",
  "Vara nära sexuellt? ",
  "@t Dagliga aktiviteter",
  "Ta hand om ditt hushåll? ",
  "Göra det viktigaste hushållsarbetet på ett bra sätt?",
  "Få allt det hushållsarbete gjort som du behövde göra?",
  "Få ditt hushållsarbete gjort så fort som det behövdes?",
  "Ditt dagliga arbete eller studier? ",
  "Att göra dina viktigaste arbets- eller studieuppgifter bra?",
  "Att få allt det arbete gjort som du behövde göra?",
  "Att få ditt arbete gjort så fort som det behövdes?",
  "@t Delaktighet i samhället",
  "Hur stort problem har du haft med att delta i aktiviteter i samhället (till exempel festligheter, religiösa eller andra aktiviteter) på samma sätt som andra?",
  "Hur stort problem har du haft på grund av hinder i din omgivning?",
  "Hur stort problem har du haft att leva med värdighet på grund av andras attityder och handlingar?",
  "Hur mycket tid har du lagt ner på ditt hälsotillstånd eller dess konsekvenser?",
  "Hur mycket har du påverkats känslomässigt av ditt hälsotillstånd?",
  "Hur mycket har din hälsa belastat din eller din familjs ekonomi?",
  "Hur stort problem har din familj haft på grund av dina hälsoproblem?",
  "Hur stort problem har du haft med att göra saker på egen hand för avkoppling och nöje?"
]


// Insert question into the block
F.questionBlock.questions = allQuestions.map( (qstring, index) =>{ 
  let q = deepCopy(F.question);
  q.subject = qstring;
  q.questionNumber = index + 1;
  q.questionId = "q"+(index + 1);
  q.answerAlternatives = def_alternatives;
  return q;
} );

// insert the block into the page

// F.page.page.questionBlocks[0] = F.questionBlock;
// F.base.pages[0] = F.page;
// fe = new FormExtractor(F.base);

// wf('test.json', JSON.stringify(fe.formObj) );
