text2jsvar
==========
[![NPM version](http://img.shields.io/npm/v/text2jsvar.svg?style=flat)](https://www.npmjs.com/package/text2jsvar) [![NPM downloads](http://img.shields.io/npm/dm/text2jsvar.svg?style=flat)](https://www.npmjs.com/package/text2jsvar) [![MIT License](http://img.shields.io/badge/license-MIT-blue.svg?style=flat)](LICENSE)
text2jsvar is a lightweight JavaScript library for converting plain text to JS string variable.

It can easily transfer the following JavaScript function text into a JavaScript string variable.

Convert:
```javascript
var sayHello = function() {
    alert("Hello World");
}
```

To:
```javascript
var result = "var sayHello = function() {\n    alert(\"Hello World\");\n}"
```

Online demo: [Text to JS variable converter](http://jstools.io/text-to-js-variable/ "Text to JS variable converter").

## Install

```
npm install text2jsvar
```

## Usage in Node.js

```javascript
var text2jsvar = require('text2jsvar');
text2jsvar.convert('a\nb'); // return 'a\\nb'
```

## Usage in browsers

You can find the minified JS file for browsers at `~/node_modules/text2jsvar/min/text2jsvar.min.js`. Copy this file to your web project and include it using `<script>` tag, it will declare a global variable: `text2jsvar`.

```html
<script src="text2jsvar.min.js"></script>
<script>
    text2jsvar.convert('a\nb'); // return 'a\\nb'
</script>
```
## text2jsvar.convert(source, double)
Description: Convert text to JavaScript string variable.

### Arguments
<table>
    <tr>
        <th>Parameter</th>
        <th>Type</th>
        <th>Description</th>
    </tr>
    <tr>
        <td>source</td>
        <td>String</td>
        <td>The source string to be converted.</td>
    </tr>
    <tr>
        <td>double</td>
        <td>Boolean</td>
        <td>Default: false. If <b>double</b> is set to <b>true</b>, the source string will be converted twice.</td>
    </tr>
</table>

### Return value
The converted text.

## text2jsvar.revert(convertedText, double)
Description: Revert the converted text to the source string.

<table>
    <tr>
        <th>Parameter</th>
        <th>Type</th>
        <th>Description</th>
    </tr>
    <tr>
        <td>convertedText</td>
        <td>String</td>
        <td>The converted text to be reverted back.</td>
    </tr>
    <tr>
        <td>double</td>
        <td>Boolean</td>
        <td>Default: false. Set <b>double</b> to <b>true</b> if the text was converted twice.</td>
    </tr>
</table>

### Return value
The source string of the converted text.
