// find the max number of character occuring in the sentence

const MaxChar = (string) => {
  let hashMap = {};
  let max = 0;
  let maxChar = "";
  for (let char of string.toLowerCase()) {
    hashMap[char] = hashMap[char] + 1 || 1;
  }

  for (let char in hashMap) {
    if (hashMap[char] > max) {
      max = hashMap[char];
      maxChar = char;
    }
  }

  return maxChar;
};

console.log(MaxChar("Hello World"));
