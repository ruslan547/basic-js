const CustomError = require("../extensions/custom-error");
const SECOND_PER_HOUR = 3600;

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  const turns = Math.pow(2, disksNumber) - 1;
  const seconds = Math.floor(turns / turnsSpeed * SECOND_PER_HOUR);

  return { turns, seconds };
};
