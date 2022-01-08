// Memoization generic function
const memoize = (fn) => {
  const cache = {};
  return function (...args) {
    if (cache[args]) {
      return cache[args];
    }

    const result = fn.apply(this, args);
    cache[args] = result;
    return result;
  };
};

const slowFibonacci = (n) => {
  if (n === 1) {
    return [0, 1];
  }

  const arr = slowFibonacci(n - 1);
  arr.push(arr[arr.length - 1] + arr[arr.length - 2]);

  return arr;
};

const fibonacci = memoize(slowFibonacci);

console.log(fibonacci(15));
