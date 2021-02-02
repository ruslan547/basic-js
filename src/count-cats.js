const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  return matrix.reduce((cats, arr) => {
    return cats + arr.reduce((ac, item) => item === '^^' ? ++ac : ac, 0);
  }, 0)
};
