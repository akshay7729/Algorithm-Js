// write the numbers from 1 to 100
// if the number is divisible by 3 print Fizz
// if the number is divisible by 5 print Buzz
// if the number is divisible by both 3 and 5 print FizzBuzz

const fizBuzz = (n) => {
  for (let i = 1; i < n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
};

fizBuzz(101);
