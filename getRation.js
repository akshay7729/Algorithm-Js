// Given an array of integers, calculate the ratios of its elements that are
// positive, negative, and zero. Print the decimal value of each fraction
// on a new line with places after the decimal.

// arr = [1,1,0,-1,-1]

const getRatio = (arr) => {
  let positiveCount = 0;
  let negativeCount = 0;
  let zerosCount = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      positiveCount++;
    } else if (arr[i] < 0) {
      negativeCount++;
    } else if (arr[i] === 0) {
      zerosCount++;
    }
  }

  return [
    positiveCount / arr.length,
    negativeCount / arr.length,
    zerosCount / arr.length,
  ];
};

console.log(getRatio([-4, 3, -9, 0, 4, 1]));
