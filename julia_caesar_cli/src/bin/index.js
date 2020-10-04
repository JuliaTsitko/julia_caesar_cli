const { program } = require('commander');

program.storeOptionsAsProperties(true);
program
    .requiredOption('-a, --action [type]', 'supported actions: encode / decode')
    .requiredOption('-s, --shift [type]', 'integer argument')
    .requiredOption('-i, --input [type]', 'source file path or string')
    .requiredOption('-o, --output [type]', 'output file path or string')
    .parse(process.argv);

module.exports.program = program;