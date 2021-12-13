const vowels = (str) => {
  const vowels = ["a", "e", "i", "o", "u"];
  let getVowels = [];
  str.split("").filter((char) => {
    if (vowels.includes(char) && !getVowels.includes(char)) {
      getVowels.push(char);
    }
  });
  return getVowels.length;
};

// solution 2
const vowelsAlt = (str) => {
  return [...new Set(str.match(/[aeiou]/gi))].length;
};

console.log(vowels("This is a wonderful day"));
console.log(vowelsAlt("This is a wonderful day"));
