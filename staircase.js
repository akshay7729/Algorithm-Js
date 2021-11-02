const staircase = (n) => {
  for (let i = 0; i < n; i++) {
    console.log(` `.repeat(n - i) + `#`.repeat(i + 1));
  }
};

staircase(4);
