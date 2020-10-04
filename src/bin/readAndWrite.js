const fs = require('fs');

const readAndWrite = (inputPath, outputPath, cypher, action, shift) => {
    fs.readFile(inputPath, 'utf8' , (err, data) => {
        if (err) {
            console.error(err);
            return
        }

        const outputString = cypher(action, data, shift);
        fs.readFile(outputPath, 'utf8', (err, data) => {
            if (err) {
                console.error(err);
                return
            }

            const outputValue = data + outputString;
            fs.writeFile(outputPath, outputValue, err => {
                if (err) {
                    console.error(err);
                    return
                }
            })
        });
    })
};

module.exports.readAndWrite = readAndWrite;
