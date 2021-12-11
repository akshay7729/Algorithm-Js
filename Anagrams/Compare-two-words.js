"use strict";

// compare two words

const compareLetters = (a, b) => {
  return a.split("").sort().join("") === b.split("").sort().join("");
};

let compareApple = compareLetters.bind(null, "apple");

console.log(compareApple("aplep")); // true
console.log(compareApple("appld")); // false
console.log(compareApple("apppe")); // false
console.log(compareApple("aplepppppppppppppppp")); // false
