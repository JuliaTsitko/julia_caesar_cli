const fs = require('fs');

const readAndWrite = (inputPath, outputPath, cypher, action, shift) => {
    const errorDescription = (parameter, err) => `Program failed, ${parameter} parameter is invalid for some reasons: ${err}`;


    fs.readFile(inputPath, 'utf8' , (err, data) => {
        if (err) {
            const error = errorDescription('-i/--input', err);
            console.error(error);
            return;
        }

        const outputString = cypher(action, data, shift);
        fs.readFile(outputPath, 'utf8', (err, data) => {
            if (err) {
                const error = errorDescription('-o/--output', err);
                console.error(error);
                return;
            }

            const outputValue = data + outputString;
            fs.writeFile(outputPath, outputValue, err => {
                if (err) {
                    const error = errorDescription('-o/--output', err);
                    console.error(error);
                }
            });
        });
    });
};

module.exports.readAndWrite = readAndWrite;
