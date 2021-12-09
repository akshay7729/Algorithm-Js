// Find the most common characters in a string

// Function to construct hasmaps and put each chars in an object
const MostCommonString = (string) => {
  const lowerCaseString = string.toLowerCase();
  const hashMap = {};

  for (let char of lowerCaseString) {
    if (hashMap[char]) {
      hashMap[char]++;
    } else {
      hashMap[char] = 1;
    }
  }
  return hashMap;
};

console.log(MostCommonString("Hello World"));

// Frequency Counter alt solution
const MostCommonStringAlt = (string) => {
  const hashMap = {};
  for (let char of string.toLowerCase()) {
    hashMap[char] = hashMap[char] + 1 || 1;
  }
  return hashMap;
};

console.log(MostCommonStringAlt("Hello World"));
