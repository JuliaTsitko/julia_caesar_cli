function returnShiftedAlphabet(alphabet, shift) {
    const doubledShift = shift * 2;
    const alphabetLength = alphabet.length;
    let shiftedAlphabet;

    shiftedAlphabet = alphabet.substring(doubledShift, alphabetLength) + alphabet.substring(0, doubledShift);
    return shiftedAlphabet;
}

function returnCaesarCypherResult(action, input, shift) {
    const alphabet = 'AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz';
    const shiftedAlphabet = returnShiftedAlphabet(alphabet, shift);
    let primaryAlphabet;
    let secondaryAlphabet;
    let output = '';

    if (action === 'encode') {
        primaryAlphabet = alphabet;
        secondaryAlphabet = shiftedAlphabet;
    }

    if (action === 'decode') {
        primaryAlphabet = shiftedAlphabet;
        secondaryAlphabet = alphabet;
    }

    for (let char of input) {
        let character = char;
        const characterIndex = primaryAlphabet.indexOf(character);
        if (characterIndex > 0) {
            character = secondaryAlphabet[characterIndex];
        }
        output += character;
    }

    return output;
}

module.exports.returnCaesarCypherResult = returnCaesarCypherResult;
