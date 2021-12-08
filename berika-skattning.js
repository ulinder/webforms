require('./constants.js');
const YAML = require('yaml');
var fs = require('fs');
var path = require('path');
var FormExtractor = require('./lib/form_extractor.js');
var wf = require('./lib/write_file.js');

// SETUP
// Namn på skattningen
  NAME = "ege-q"

// läs in skattning från input
form = JSON.parse( fs.readFileSync( path.join(WEBFORMS_ROOT, 'input', NAME+'.json'), 'utf8' ) );

// FormExtractor(formObj, sysname, id_format['1=plain', '2=fqpn'], rulesObj)
fe = new FormExtractor(
  form, 
  NAME, 
  2 
  // require(`./rules/${NAME}.js`)
);

wf( NAME+".json", JSON.stringify(fe.body) );
wf(`menues/${NAME}_menu.txt`, fe.menu.join("\n") );
wf(`${NAME}-rules.txt`, fe.giveSummaryRule() );
