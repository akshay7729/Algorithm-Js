// Recursive better
const initialHash = {
  1: 0,
  2: 1,
};

const fib = (num, hash = initialHash) => {
  if (hash[num] === undefined) {
    hash[num] = fib(num - 1, hash) + fib(num - 2, hash);
  }
  return hash[num];
};

console.log(fib(5));
