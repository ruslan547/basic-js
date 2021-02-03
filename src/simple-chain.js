const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: [],

  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    this.chain.push(value);
    return this;
  },
  removeLink(position) {
    if (
      isNaN(position) ||
      position % 1 ||
      position < 0 ||
      position >= this.getLength()
    ) {
      this.chain = [];
      const er = new Error();
      er._validationProp = 'NA';
      throw er;
    }

    this.chain.splice(--position, 1);
    return this;
  },
  reverseChain() {
    this.chain.reverse();

    return this;
  },
  finishChain() {
    let result = '';

    this.chain.forEach((item, index) => {
      result += index ? `~~( ${item} )` : `( ${item} )`;
    });
    this.chain = [];

    return result;
  }
};

module.exports = chainMaker;
