/*jshint multistr:true */
'use strict';

var fs = require('fs');
var path = require('path');
var hifile = require('..');
var head = '<!DOCTYPE html><html lang="en"><head><meta charset="utf-8">\
<title>hifile</title><style>body {margin: 0}</style>\
<link rel="stylesheet" type="text/css" href="https://cdn.rawgit.com/necolas/normalize.css/071af828a2f6c882d5de1536135bf13b5711f554/normalize.css">\
<link rel="stylesheet" type="text/css" href="https://cdn.rawgit.com/diffsky/hifile/cdbb7ab33c3d848720f1e6510b0dba96a5100dd9/assets/hifile.css">\
<link rel="stylesheet" type="text/css" href="https://cdn.rawgit.com/diffsky/hifile/5fc76f8f1934dff1f5f845d1fabfd7c60a0949c7/assets/hljs-theme-solarized-dark.css">\
<script src="https://cdn.rawgit.com/diffsky/hifile/b3a990b5cbf73274e38132c6b33917a87479af7e/assets/hifile.js"></script></head>\
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
