const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(modification = true) {
    this.modification = modification;
  }
  encrypt(message, key) {

    if (!(message && key)) {
      throw new Error();
    }

    message = String(message).toLowerCase();
    key = String(key).toLowerCase();

    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let result = '';
    let j = 0;

    for (let i = 0; i < message.length; i++) {
      if (!alphabet.includes(message[i])) {
        result += message[i];
        continue;
      }

      const aCode = 'a'.charCodeAt();
      const zCode = 'z'.charCodeAt();
      const k = key.charCodeAt(j) - aCode;
      const mesCode = message.charCodeAt(i);

      let resCode;

      if (mesCode + k > zCode) {
        resCode = (mesCode - aCode + k) % 26 + aCode;
      } else {
        resCode = mesCode + k;
      }

      result += String.fromCharCode(resCode);
      j++;
      j %= key.length;
    }

    return result.toUpperCase();
  }
  decrypt() {
    throw new CustomError('Not implemented');
    // remove line with error and write your code here
  }
}

module.exports = VigenereCipheringMachine;
