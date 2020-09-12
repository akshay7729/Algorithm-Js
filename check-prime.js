const isPrime = (n) => {
  let isPrime = true;
  if (n === 1) {
    console.log("1 is neither prime nor composite");
    return false;
  }

  if (n === 0) {
    console.log("Zero is not a prime number");
    return false;
  }

  if (n < 1) {
    console.log("Negative numbers");
    return false;
  }

  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      isPrime = false;
      break;
    }
  }

  if (isPrime) {
    return true;
  } else {
    return false;
  }
};
