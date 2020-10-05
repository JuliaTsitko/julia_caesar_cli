const fs = require('fs');
const errorDescription = require('./errorDescription').errorDescription;


const writeFile = (path, value, errParam) => {
    fs.writeFile(path, value, err => {
        if (err) {
            const error = errorDescription(errParam, err);
            console.error(error);
        }
    });
};

module.exports.writeFile = writeFile;
