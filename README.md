# hifile [![](https://travis-ci.org/matthewhadley/hifile.svg)](https://travis-ci.org/matthewhadley/hifile)

Generate file viewer markup for highlighted strings from [highlight.js](https://github.com/isagalaev/highlight.js)

![hifile output](https://raw.githubusercontent.com/matthewhadley/hifile/master/example/file.png)

Live demo of example output [available on rawgit.com](https://cdn.rawgit.com/matthewhadley/hifile/b6488b27775794dabafa508a17ed2b4cf2f69bc2/example/hifile.html#L12).

## Usage

```
var hifile = require('hifile');

var str = fs.readFileSync(path.join(__dirname, 'example.js'), 'utf8');
var markup = hifile(str, 'js');
```

Presentation and behaviour are provided via:

- `assets/css/hifile.css`
- `assets/js/hifile.js` with
- `assets/css/hljs-theme-*.css` for highlight theming

When served to the browser with the markup, line numbers and line highlighting will be available.
