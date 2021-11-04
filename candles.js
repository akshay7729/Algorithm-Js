// You are in charge of the cake for a child's birthday.
// You have decided the cake will have one candle for each year of their total age.
// They will only be able to blow out the tallest of the candles.
// Count how many candles are tallest.
// Example
// candles: [4,4,1,2]
// output - 2
// The maximum height candles are  units high. There are  of them, so return .

const findMaxCandles = (arr) => {
  const sortedArr = arr.sort(sort);
  const maxNum = sortedArr[sortedArr.length - 1];
  const getAllMax = arr.filter((x) => x === maxNum);
  return getAllMax.length;
};

const sort = (a, b) => a - b;

console.log(findMaxCandles([4, 1, 4, 2, 2, 1, 4, 3]));
