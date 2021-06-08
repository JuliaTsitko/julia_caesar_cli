# **JULIA_CAESAR_CLI**

A CLI tool to encode or decode a text by [Caesar cipher.](https://en.wikipedia.org/wiki/Caesar_cipher)

# Installation

- Run `npm install` in project root directory (julia_caesar_cli) to install [commander](https://www.npmjs.com/package/commander) dependency.

# Options

Program accepts next require parameters:

1. **-a, --action:** `encode` or `decode` string, ***is required***

2. **-s, --shift:** transformation shift, should be **greater then 0** and **less then 27** (not equal in both cases). ***is required***

3. **-i, --input:** nothing or path to file (ex. ./src/input/input.txt). ***is required***
 
4. **-o, --output:** nothing or path to file (ex. ./src/output/output.txt). ***is required***

# Usage

Console usage:
- Pass no params to -i and -o to enable console live cipher

- Example: `node julia_caesar_cli -a encode -s 3 -i -o`

- Enter text to encode or decode (ex. 'Hello World!')

- Get result in command line (ex. 'Khoor Zruog!')


Text file usage:
- Enter or paste text in ./src/input/input.txt or creat text file in any destination (the same for output file)

- Run command with your options `node julia_caesar_cli -a [action_type] -s [shift_num] -i [path to file] -o [path to file]`

- Example: `node julia_caesar_cli -a encode -s 3 -i './src/input/input.txt' -o './src/output/output.txt'`

- Get result in output file
