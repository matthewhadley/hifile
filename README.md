# hifile

Generate file viewer markup for highlighted strings from [highlight.js](https://github.com/isagalaev/highlight.js)

## Usage

```
var hifile = require('hifile');

var str = fs.readFileSync(path.join(__dirname, 'example.js'), 'utf8');
var markup = hifile(str, 'js');
```

Presentation and behaviour are provided via `assets/hifile.css` and `assets/hifile.js` with
one of the `assets/hljs-theme-*.css` for highlight theming; when served to the browser
with the markup, line numbers and line highlighting will be available.

Check out some example output on [rawgit.com](https://cdn.rawgit.com/diffsky/hifile/f365ffb96005bc8c8f4828edeb136a96cf691490/example/hifile.html#L12). Here's a screenshot of the same hilighted file using a different theme:

![hifile output](https://raw.github.com/wiki/diffsky/hifile/screenshot.jpg)
