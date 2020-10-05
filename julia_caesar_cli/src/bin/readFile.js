const fs = require('fs');
const errorDescription = require('./errorDescription').errorDescription;

const readFile = (path, errParam, callback) => {
    return fs.readFile(path, 'utf8', (err, data) => {
        if (err) {
            const error = errorDescription(errParam, err);
            console.error(error);
            return;
        }
        callback(data);
    });
};

module.exports.readFile = readFile;
