const fs = require('fs'); //fill system - manipula o arquivo

module.exports = function (filename, successFn, errorFn) {
    fs.readFile(filename, function (err, data) {
        if (err) {
            errorFn(err);
        } else {
            successFn(data);
        }
    });
};