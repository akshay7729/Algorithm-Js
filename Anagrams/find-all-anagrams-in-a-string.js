// str1 -> asdadfasdasasdasdasdds

// str 2 -> dda

const anagramCheck = (str1, str2) => {
  let bigStr = "";
  let smallStr = "";
  let result = [];
  if (str1.length > str2.length) {
    bigStr = str1;
    smallStr = str2;
  } else if (str1.length === str2.length) {
    if (anagram(str1, str2)) {
      return str1;
    }
  } else {
    bigStr = str2;
    smallStr = str1;
  }

  for (let i = 0; i < bigStr.length - smallStr.length + 1; i++) {
    let current = bigStr.substr(i, smallStr.length);
    if (anagram(current, smallStr)) {
      result.push(current);
    }
  }
  return result;
};

const anagram = (str1, str2) => {
  return (
    str1.toLowerCase().split("").sort().join("") ===
    str2.toLowerCase().split("").sort().join("")
  );
};

console.log(anagramCheck("asdadfasdasasdasdasdds", "dsad"));
