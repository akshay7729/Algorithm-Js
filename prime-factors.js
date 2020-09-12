const getPrimeFactors = (n) => {
  var factors = [];
  divisor = 2;
  if (n < 1) {
    console.log("not applicable");
    return false;
  }

  for (let i = 2; i < n; i++) {
    if (n % divisor === 0) {
      factors.push(divisor);
      n = n / divisor;
    } else {
      divisor++;
    }
  }

  return factors;
};
