const process = require('process');
const returnCaesarCipherResult = require('./../caesar_cipher').returnCaesarCipherResult;
const readFile = require('./readFile').readFile;
const writeFile = require('./writeFile').writeFile;
const readAndWrite = require('./readAndWrite').readAndWrite;
const inputErr = require('./errorDescription').inputErr;
const outputErr = require('./errorDescription').outputErr;

const doCipher = (input, output, action, shift) => {
    if (typeof input === 'boolean') {
        process.stdin.setEncoding('utf8');
        process.stdin.on('readable', () => {
            let chunk;
            while ((chunk = process.stdin.read()) !== null) {
                const cipher = returnCaesarCipherResult(action, chunk, shift);
                if (typeof output === 'boolean') {
                    process.stdout.write(`Caesar cipher result: ${cipher}`);
                }

                if (typeof output === 'string') {
                    readFile(output, outputErr, (data) => {
                        const outputValue = data + cipher;
                        writeFile(output, outputValue, outputErr);
                    });
                }
            }
        });

        process.stdin.on('end', () => {
            process.stdout.write('end');
        });
    } else {
        if (typeof output === 'string') {
            readAndWrite(input, output, returnCaesarCipherResult, action, shift);
        }

        if (typeof output === 'boolean') {
            readFile(input, inputErr, (data) => {
                const cipher = returnCaesarCipherResult(action, data, shift);
                process.stdout.write(`Caesar cipher result: ${cipher}`);
            })
        }
    }
};

module.exports.doCipher = doCipher;
