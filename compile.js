var tss = require('./index');
var fs = require('fs');
var tss = new tss.TypeScriptSimple({target: 1, sourceMap: true}, false);
fs.writeFileSync('./path/to/test.js', tss.compile(fs.readFileSync('./path/to/test.ts').toString(), './path/to/test.ts'));
