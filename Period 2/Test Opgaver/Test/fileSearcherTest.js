var assert = require('assert');
var FS = require('../Methods/fileSearcher');

describe('File Searcher function', function () {
    it('find all files in the given directory', function (done) {
        FS.dirSearcher('../Test Opgaver/Methods', 'js', function(err, data) {
            if (err) {
                return callback(err);
            }
            // console.log(data);
            assert.equal(data, [ 'Calc.js', 'fileSearcher.js' ]);
            done();
        });
    });
});