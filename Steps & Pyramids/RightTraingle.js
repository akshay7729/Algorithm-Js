const rightTringle = (n) => {
  for (let i = 1; i < n; i++) {
    console.log(`${` `.repeat(n - i)}${`*`.repeat(i)}`);
  }
};

rightTringle(6);
