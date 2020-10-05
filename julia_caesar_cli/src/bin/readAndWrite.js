const fs = require('fs');
const readFile = require('./readFile').readFile;
const writeFile = require('./writeFile').writeFile;
const inputErr = require('./errorDescription').inputErr;
const outputErr = require('./errorDescription').outputErr;

const readAndWrite = (inputPath, outputPath, cypher, action, shift) => {
    readFile(inputPath, inputErr, (data) => {
        const outputString = cypher(action, data, shift);
        readFile(outputPath, outputErr, (data) => {
            const outputValue = data + outputString;
            writeFile(outputPath, outputValue, outputErr);
        });
    });
};

module.exports.readAndWrite = readAndWrite;
