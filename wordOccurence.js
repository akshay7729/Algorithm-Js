// count how many times a word appears in a string

const wordOccur = (str, word) => {
  return str.split(word).length - 1;
};

console.log(
  wordOccur("We went down to the stall, then down to the river to.", "to")
);

// cound word how many times a word appears in a string but skip if it is present in a mid word
// for eg. check if 'to' word is availble in 'too', then its not a match
