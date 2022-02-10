// 1. assumstions
// 2. Find errors
// 3. Handle errors

const longSubStr = (s) => {
  if (s.length) {
    const uniqueSubStrs = [];
    const arr = s.split("");
    let str = "";
    for (let i = 0; i < arr.length; i++) {
      if (str.includes(arr[i])) {
        uniqueSubStrs.push(str);
        str = "";
        str += arr[i];
      } else {
        str += arr[i];
      }
    }

    const sortedSubStr = uniqueSubStrs.sort((a, b) => a.length - b.length);

    return sortedSubStr[sortedSubStr.length - 1].length;
  } else if (s.length === 0) {
    return 0;
  } else {
    return undefined;
  }
};

console.log(longSubStr("pwwkew"));
