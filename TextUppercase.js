const textUppercase = (str) => {
  const updated = [];
  const strArr = str.split(" ");
  for (let word of strArr) {
    updated.push(word.charAt(0).toUpperCase() + word.slice(1));
  }
  return updated.join(" ");
};

console.log(textUppercase("hello world"));
