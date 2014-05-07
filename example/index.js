/*jshint multistr:true */
'use strict';

var fs = require('fs');
var path = require('path');
var hifile = require('..');
var head = '<!DOCTYPE html><html lang="en"><head><meta charset="utf-8">\
<title>hifile</title><style>body {margin: 0}</style>\
<link rel="stylesheet" type="text/css" href="/assets/hifile.css">\
<link rel="stylesheet" type="text/css" href="/assets/hljs-theme-solarized-dark.css">\
<script src="/assets/hifile.js" type="text/javascript"></script></head>\
<script>window.onload = function(){hifile.init()};</script><body>';
var foot = '</body></html>';
var code;
var input = './index.js';
var output = 'hifile.html';

// comment
console.log('parsing source', input);
code = fs.readFileSync(input, 'utf8');
code = hifile(code, path.extname(input).substring(1));
/*
multi line
comment

here
*/
console.log('writing example/' + output);
fs.writeFileSync(path.join(__dirname, output), head+code+foot);
