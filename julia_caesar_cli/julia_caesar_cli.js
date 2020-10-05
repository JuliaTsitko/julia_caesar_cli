const program = require('./src/bin').program;
const doCipher = require('./src/bin/doCipher').doCipher;

const { input, output, action, shift } = program;
doCipher(input, output, action, shift);
