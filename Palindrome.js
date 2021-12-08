const palindrome = (str) => {
  var original = str
    .replace(/[\s"'.,-\/#!$%\^&*;:{}=\-_`~()\\\[\]@+|?><]/g, "")
    .toLowerCase();
  return original === original.split("").reverse().join("");
};

// palindrome alt solution
const palindromeAlt = (str) => {
  str.split("").every((char, index) => {
    return char === str[str.length - i - 1];
  });
};
