// Mini-ramverk för att skapa och modifiera JSON-filer från formulärtjänst.
// MENY - Här görs alla inställningar för körningen
// För att slå på en funktion = 1, för att inaktivera en funktion = 0
SHOW_MENU =           1                   // Visa överblick över alla frågor och svarsalternativ 
SHOW_FORM =           0                   // Visa hela formuläret 
TEST_FILE =           0                   // Printa ut fil för automatiserad testning
WRITE_FILE =          0                   // Skriv ut 
ADD_TIMESTAMP =       1                   // addera datum på filnamnet ex AQ-2020-11-12.json
FORMAT_IDS =          "plain"             // plain: ex q12 / complex: 1.2.12
NAME =                "barkley-adhd"      // Namn på testet, utan ändelse tex AQ, inte AQ.json



// Statisk konfiguration - RÖR EJ
WEBFORMS_ROOT = __dirname;
OUTPUT_DIR = __dirname + '/output/';
require('./lib/runner.js');
// 