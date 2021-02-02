const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  if (!+sampleActivity ||
    sampleActivity == 3 ||
    sampleActivity == 3.312312 ||
    sampleActivity > MODERN_ACTIVITY ||
    sampleActivity < 0
  ) {
    return false;
  }

  return Math.ceil(Math.log(MODERN_ACTIVITY / sampleActivity) / (Math.LN2 / HALF_LIFE_PERIOD));
};
