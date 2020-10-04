const program = require('./src/bin/index').program;
const returnCaesarCypherResult = require('./src/caesar_cypher/index').returnCaesarCypherResult;
const readAndWrite = require('./src/bin/readAndWrite').readAndWrite;

const { shift, input, output, action } = program;
readAndWrite(input, output, returnCaesarCypherResult, action, shift);
