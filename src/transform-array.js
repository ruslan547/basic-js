const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error();
  }

  const controlers = [
    '--discard-next', '--discard-prev',
    '--double-next', '--double-prev'
  ];
  const newArr = arr.slice();

  for (let i = 0; i < newArr.length; i++) {
    switch (newArr[i]) {
      case controlers[0]:
        if (i < newArr.length - 1 && !controlers.includes(newArr[i + 1])) {
          newArr.splice(i + 1, 1);
        }
        break;

      case controlers[1]:
        if (i > 0 && !controlers.includes(newArr[i - 1])) {
          newArr.splice(i - 1, 1);
          i--;
        }
        break;

      case controlers[2]:
        if (i < newArr.length - 1 && !controlers.includes(newArr[i + 1])) {
          newArr.splice(i + 1, 0, newArr[i + 1]);
        }

        break;

      case controlers[3]:
        if (i > 0 && !controlers.includes(newArr[i - 1])) {
          newArr.splice(i - 1, 0, newArr[i - 1]);
          i++;
        }
        break;
    }
  }

  return newArr.filter(item => !controlers.includes(item));
};
