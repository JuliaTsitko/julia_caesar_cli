const program = require('./src/bin/index').program;
const process = require('process');
const returnCaesarCypherResult = require('./src/caesar_cypher/index').returnCaesarCypherResult;
const readAndWrite = require('./src/bin/readAndWrite').readAndWrite;

const { shift, input, output, action } = program;

if (typeof input === 'boolean' && typeof output === 'boolean') {
    process.stdin.setEncoding('utf8');

    // TODO: if input === boolean, output === string stdin + write
    // TODO: separate read and write func
    // TODO: do all scenarios
    if (typeof output === 'boolean') {
        process.stdin.on('readable', () => {
            let chunk;
            while ((chunk = process.stdin.read()) !== null) {
                process.stdout.write(`Caesar cypher result: ${returnCaesarCypherResult(action, chunk, shift)}`);
            }
        });
    }

    process.stdin.on('end', () => {
        process.stdout.write('end');
    });
} else {
    readAndWrite(input, output, returnCaesarCypherResult, action, shift);
}
