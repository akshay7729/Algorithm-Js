// I have added performance calculation as well, so function wont normally work if you
// run in terminal
// please paste this code in chrome debugger to run the program

// solution 1
const stringReverse = (str) => {
  return str.split("").reverse().join("");
};

// solution 2
const stringReverse2 = (str) => {
  let reversed = "";
  for (let char of str) {
    reversed = char + reversed;
  }
  return reversed;
};

// solution 3
const stringReverse3 = (str) => {
  return str.split("").reduce((reversed, char) => char + reversed);
};

let t1 = performance.now();
console.log(
  stringReverse("appleappleappleappleappleappleappleappleappleappleappleapple")
);
let t2 = performance.now();

let t3 = performance.now();
console.log(
  stringReverse2("appleappleappleappleappleappleappleappleappleappleappleapple")
);
let t4 = performance.now();

let t5 = performance.now();
console.log(
  stringReverse3("appleappleappleappleappleappleappleappleappleappleappleapple")
);
let t6 = performance.now();

console.log(`performace - ${(t2 - t1) / 1000}`);
console.log(`performace 2 - ${(t4 - t3) / 1000}`);
console.log(`performace 3 - ${(t6 - t5) / 1000}`);
