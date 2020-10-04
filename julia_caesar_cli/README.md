# **JULIA_CAESAR_CLI**

A CLI tool to encode or decode a text by [Caesar cipher.](https://en.wikipedia.org/wiki/Caesar_cipher)

# Installation

- Clone or download project from [repository.](https://github.com/JuliaTsitko/julia_caesar_cli)

- Run `npm install` in project root directory (julia_caesar_cli) to install [commander](https://www.npmjs.com/package/commander) dependency.

# Options

Program accepts next require parameters:

1. **-a, --action:** `encode` or `decode` string, ***is required***

2. **-s, --shift:** transformation shift, should be **greater then 0** and **less then 27** (not equal in both cases). ***is required***

3. **-i, --input:** string or path to file (ex. ./src/input/input.txt). ***is required***
 
4. **-o, --output:** path to file (ex. ./src/input/output.txt). ***is required***

# Usage

- Enter or paste text in input.txt or creat text file in any destination

- Run command with your options `node julia_caesar_cli -a [action_type] -s [shift_num] -i [path to file or string] -o [path to file]`

- Get result in output file or command line
