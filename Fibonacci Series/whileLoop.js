const fib = (n) => {
  let [a, b] = [0, 1];

  while (n > 1) {
    [a, b] = [b, a + b];
    n -= 1;
  }

  return a;
};

console.log(fib(8));
