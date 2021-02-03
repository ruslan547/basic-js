const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(modification = true) {
    this.modification = modification;
  }
  encrypt(message, key) {
    throw new CustomError('Not implemented');
    // remove line with error and write your code here
    if (!(message && key)) {
      throw new Error();
    }

    message = String(message).toUpperCase();
    key = String(key);

    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let result;
    let i;

    for (let word of message) {
      if (i >= key.length) {
        i = 0;
      }

      if (alphabet.includes(word)) {
        result +=
          i++;
        continue;
      }


    }
  }
  decrypt() {
    throw new CustomError('Not implemented');
    // remove line with error and write your code here
  }
}

module.exports = VigenereCipheringMachine;
