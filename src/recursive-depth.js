const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    const arrayDepths = arr.filter(item => Array.isArray(item))
      .map(item => this.calculateDepth(item));

    return arrayDepths.length ? Math.max(...arrayDepths) + 1 : 1;
  }
};
