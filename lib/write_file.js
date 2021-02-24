require('../constants.js');
const fs = require('fs');
const YAML = require('yaml');

module.exports = (filename, content) => {
  fs.writeFile( OUTPUT_DIR + filename, 
  content, 
  'utf8', 
  (err)=>{ if(err) console.log("errors writing file: ", err); }
  );
}