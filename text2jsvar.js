module.exports = {
    convert: (source, double = false) => {
        return double ? convertEscapeChars(convertEscapeChars(source)) : convertEscapeChars(source);
    },
    revert: (convertedText, double = false) => {
        let output = convertedText;
        if (double) {
            output = output.replace(/\\\'/g, '\'')
                .replace(/\\"/g, '"')
                .replace(/\\\\/g, '\\');
        }
        output = revertEscapeChars(output, 'n');
        output = revertEscapeChars(output, 'r');
        output = revertEscapeChars(output, 't');
        output = revertEscapeChars(output, 'f');
        output = output.replace(/\\"/g, '"')
            .replace(/\\\'/g, '\'')
            .replace(/\\\\/g, '\\');
        return output;
    }
};

if (!String.prototype.endsWith) {
  String.prototype.endsWith = function (searchString, position) {
    var subjectString = this.toString();
    if (typeof position !== 'number' || !isFinite(position) || Math.floor(position) !== position || position > subjectString.length) {
      position = subjectString.length;
    }
    position -= searchString.length;
    var lastIndex = subjectString.indexOf(searchString, position);
    return lastIndex !== -1 && lastIndex === position;
  };
}

function convertEscapeChars(source) {
    return source.replace(/\\/g, '\\\\')
        .replace(/\n/g, '\\n')
        .replace(/\r/g, '\\r')
        .replace(/\t/g, '\\t')
        .replace(/\f/g, '\\f')
        .replace(/"/g, '\\"')
        .replace(/'/g, '\\\'');
}

function revertEscapeChars(str, target) {
    let spliter = '\\' + target;
    let escaper;
    switch (target) {
        case 'n':
            escaper = '\n';
            break;
        case 'r':
            escaper = '\r';
            break;
        case 't':
            escaper = '\t';
            break;
        default:
            escaper = '';
    }
    let arr = str.split(spliter);
    let output = '';
    arr.forEach((item, index) => {
        output += item;
        if (item.endsWith('\\')) {
            output += spliter;
        } else if (index < arr.length - 1) {
            output += escaper;
        }
    });
    return output;
}