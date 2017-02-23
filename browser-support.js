// browserify browser-support.js -t [ babelify --presets [ es2015 ] ] | uglifyjs > min/text2jsvar.min.js
window.text2jsvar = require('./text2jsvar');