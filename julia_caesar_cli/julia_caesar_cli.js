const program = require('./src/bin').program;
const doCypher = require('./src/bin/doCypher').doCypher;

const { input, output, action, shift } = program;
doCypher(input, output, action, shift);
