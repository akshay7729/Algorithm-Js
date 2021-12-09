const intReverse = (num) => {
  const sign = Math.sign(num);
  const parsedNum = parseInt(convertToStr(num));
  if (sign === -1) {
    return -Math.abs(parsedNum);
  } else {
    return parsedNum;
  }
};

const convertToStr = (num) => {
  return num.toString().split("").reverse().join("");
};

console.log(intReverse(-526));
