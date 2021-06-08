const program = require('./src/bin').program;
const doCipher = require('./src/bin/doCipher').doCipher;

const { input, output, action, shift } = program;
const actionTypes = ['encode', 'decode'];

if (shift <= 0 || shift >= 27) {
    console.error(`ERROR! Transformation shift, should be greater then 0 and less then 27 (not equal in both cases). You entered "${shift}"`);
    return 0;
}

if (!actionTypes.includes(action)) {
    console.error(`ERROR! Action type must be "encode" or "decode" only. You entered "${action}"`);
    return 0;
}

doCipher(input, output, action, shift);
