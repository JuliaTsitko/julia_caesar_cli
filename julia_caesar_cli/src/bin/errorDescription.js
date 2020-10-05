const inputErr = '-i/--input';
const outputErr = '-o/--output';

const errorDescription = (parameter, err) => `Program failed, ${parameter} parameter is invalid for some reasons: ${err}`;

module.exports.inputErr = inputErr;
module.exports.outputErr = outputErr;
module.exports.errorDescription = errorDescription;
