

// COMMON SYSTEM NAME
NAME = "dsm5"
// 


require('./constants.js');
const YAML = require('yaml');
var fs = require('fs');
var path = require('path');
var FormExtractor = require('./lib/form_extractor.js');
var wf = require('./lib/write_file.js');

form = JSON.parse( fs.readFileSync( path.join(WEBFORMS_ROOT, 'vault', NAME+'.json'), 'utf8' ) );

// EXTRACTED FORM 
fe = new FormExtractor(
  form, 
  NAME, 
  2 
  // require(`./rules/${NAME}.js`)
  );

wf( NAME+".json", JSON.stringify(fe.body) );
wf(`testfiles/${NAME}_testfile.yaml`, YAML.stringify({url: "", beskrivning:"", frågor: fe.test } ));
wf(`menues/${NAME}_menu.yaml`, YAML.stringify( fe.menu ));