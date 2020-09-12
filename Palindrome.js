var palindrome = (str) => {
  var original = str
    .replace(/[\s"'.,-\/#!$%\^&*;:{}=\-_`~()\\\[\]@+|?><]/g, "")
    .toLowerCase();
  return original === original.split("").reverse().join("");
};
