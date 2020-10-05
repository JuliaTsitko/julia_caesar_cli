const process = require('process');
const returnCaesarCypherResult = require('./../caesar_cypher').returnCaesarCypherResult;
const readFile = require('./readFile').readFile;
const writeFile = require('./writeFile').writeFile;
const readAndWrite = require('./readAndWrite').readAndWrite;
const inputErr = require('./errorDescription').inputErr;
const outputErr = require('./errorDescription').outputErr;

const doCypher = (input, output, action, shift) => {
    if (typeof input === 'boolean') {
        process.stdin.setEncoding('utf8');
        process.stdin.on('readable', () => {
            let chunk;
            while ((chunk = process.stdin.read()) !== null) {
                const cypher = returnCaesarCypherResult(action, chunk, shift);
                if (typeof output === 'boolean') {
                    process.stdout.write(`Caesar cypher result: ${cypher}`);
                }

                if (typeof output === 'string') {
                    readFile(output, outputErr, (data) => {
                        const outputValue = data + cypher;
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
            readAndWrite(input, output, returnCaesarCypherResult, action, shift);
        }

        if (typeof output === 'boolean') {
            readFile(input, inputErr, (data) => {
                const cypher = returnCaesarCypherResult(action, data, shift);
                process.stdout.write(`Caesar cypher result: ${cypher}`);
            })
        }
    }
};

module.exports.doCypher = doCypher;
