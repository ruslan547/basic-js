const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, { repeatTimes = 0, separator = '+', addition = '', additionRepeatTimes = 0, additionSeparator = '|' }) {
  let result = '';
  str = String(str);
  addition = String(addition);
  separator = String(separator);
  additionSeparator = String(additionSeparator);

  if (!repeatTimes) {
    return str + addition;
  }

  for (let i = 0; i < repeatTimes; i++) {
    let additionResult = '';

    for (let j = 0; j < additionRepeatTimes; j++) {
      additionResult += `${j ? additionSeparator : ''}${addition}`;
    }

    result += `${i ? separator : ''}${str + additionResult}`;
  }

  return result;
};
