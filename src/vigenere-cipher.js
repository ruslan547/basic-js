const CustomError = require("../extensions/custom-error");

const A_CODE = 'a'.charCodeAt();
const Z_CODE = 'z'.charCodeAt();

class VigenereCipheringMachine {
  constructor(modification = true) {
    this.modification = modification;
  }

  encrypt(message, key) {
    return this.playMachine(message, key, 'encrypt');
  }
  decrypt(encryptedMessage, key) {
    return this.playMachine(encryptedMessage, key, 'decrypt');
  }

  playMachine(message, key, type) {
    if (!(message && key)) {
      throw new Error();
    }

    message = String(message).toLowerCase();
    key = String(key).toLowerCase();

    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let result = [];
    let j = 0;

    for (let i = 0; i < message.length; i++) {
      if (!alphabet.includes(message[i])) {
        result.push(message[i]);
        continue;
      }

      const k = key.charCodeAt(j) - A_CODE;
      const mesCode = message.charCodeAt(i);

      let resCode;

      if (type === 'encrypt') {
        if (mesCode + k > Z_CODE) {
          resCode = (mesCode - A_CODE + k) % 26 + A_CODE;
        } else {
          resCode = mesCode + k;
        }
      } else if (type === 'decrypt') {
        if (mesCode - k < A_CODE) {
          resCode = mesCode + 26 - k;
        } else {
          resCode = mesCode - k;
        }
      } else {
        throw new Error();
      }

      result.push(String.fromCharCode(resCode));
      j++;
      j %= key.length;
    }

    if (!this.modification) {
      result.reverse();
    }

    return result.join('').toUpperCase();
  }
}

module.exports = VigenereCipheringMachine;
