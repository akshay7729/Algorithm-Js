const findLongestStr = (str) => {
  let longStr = "";
  for (let i = 0; i < str.length; i++) {
    let tempStr = "";
    for (let j = i; j < str.length; j++) {
      if (tempStr.includes(str[j])) {
        break;
      } else {
        tempStr += str[j];
      }
    }
    if (tempStr.length > longStr.length) {
      longStr = tempStr;
    }
  }
  return longStr;
};

console.log(findLongestStr("abader"));
