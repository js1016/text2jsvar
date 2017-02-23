var text2jsvar = require('../text2jsvar');
var expect = require('chai').expect;

describe('Single convert test', () => {
    var testCases = [{
        input: ' a\nb\nc\td \r\nab\fc  ',
        expectation: ' a\\nb\\nc\\td \\r\\nab\\fc  '
    }, {
        input: 'a\\nb\\nc',
        expectation: 'a\\\\nb\\\\nc'
    }, {
        input: 'var a="hi"',
        expectation: 'var a=\\\"hi\\\"'
    }, {
        input: 'var a=\'hi\'',
        expectation: 'var a=\\\'hi\\\''
    }, {
        input: 'var a=\'"hello"\'',
        expectation: 'var a=\\\'\\"hello\\"\\\''
    }];
    testCases.forEach((testCase, index) => {
        it('Test case ' + (index + 1) + ':\nInput:' + testCase.input + '\nExpectation:' + testCase.expectation, () => {
            expect(text2jsvar.convert(testCase.input)).to.be.equal(testCase.expectation);
        });
    });
});

describe('Double convert test', () => {
    var testCases = [{
        input: ' a\nb\nc\td \r\nab\fc  ',
        expectation: ' a\\\\nb\\\\nc\\\\td \\\\r\\\\nab\\\\fc  '
    }, {
        input: 'a\\nb\\nc',
        expectation: 'a\\\\\\\\nb\\\\\\\\nc'
    }, {
        input: 'var a="hi"',
        expectation: 'var a=\\\\\\"hi\\\\\\"'
    }, {
        input: 'var a=\'hi\'',
        expectation: 'var a=\\\\\\\'hi\\\\\\\''
    }, {
        input: 'var a=\'"hello"\'',
        expectation: 'var a=\\\\\\\'\\\\\\"hello\\\\\\"\\\\\\\''
    }];
    testCases.forEach((testCase, index) => {
        it('Test case ' + (index + 1) + ':\nInput:' + testCase.input + '\nExpectation:' + testCase.expectation, () => {
            expect(text2jsvar.convert(testCase.input, true)).to.be.equal(testCase.expectation);
        });
    });
});

describe('Single revert test', () => {
    var testCases = [{
        expectation: ' a\nb\nc\td \r\nabc  ',
        input: ' a\\nb\\nc\\td \\r\\nabc  '
    }, {
        expectation: 'a\\nb\\nc',
        input: 'a\\\\nb\\\\nc'
    }, {
        expectation: 'var a="hi"',
        input: 'var a=\\\"hi\\\"'
    }, {
        expectation: 'var a=\'hi\'',
        input: 'var a=\\\'hi\\\''
    }, {
        expectation: 'var a=\'"hello"\'',
        input: 'var a=\\\'\\"hello\\"\\\''
    }];
    testCases.forEach((testCase, index) => {
        it('Test case ' + (index + 1) + ':\nInput:' + testCase.input + '\nExpectation:' + testCase.expectation, () => {
            expect(text2jsvar.revert(testCase.input)).to.be.equal(testCase.expectation);
        });
    });
});

describe('Double revert test', () => {
    var testCases = [{
        expectation: ' a\nb\nc\td \r\nabc  ',
        input: ' a\\\\nb\\\\nc\\\\td \\\\r\\\\nabc  '
    }, {
        expectation: 'a\\nb\\nc',
        input: 'a\\\\\\\\nb\\\\\\\\nc'
    }, {
        expectation: 'var a="hi"',
        input: 'var a=\\\\\\"hi\\\\\\"'
    }, {
        expectation: 'var a=\'hi\'',
        input: 'var a=\\\\\\\'hi\\\\\\\''
    }, {
        expectation: 'var a=\'"hello"\'',
        input: 'var a=\\\\\\\'\\\\\\"hello\\\\\\"\\\\\\\''
    }];
    testCases.forEach((testCase, index) => {
        it('Test case ' + (index + 1) + ':\nInput:' + testCase.input + '\nExpectation:' + testCase.expectation, () => {
            expect(text2jsvar.revert(testCase.input, true)).to.be.equal(testCase.expectation);
        });
    });
});