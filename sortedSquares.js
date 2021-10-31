// Given an integer array nums sorted in non-decreasing order,
// return an array of the squares of each number sorted in non-decreasing order.

// Input: nums = [-4,-1,0,3,10]
// Output: [0,1,9,16,100]

const sortedSquares = (arr) => {
  let sqArr = arr.map((x) => Math.pow(x, 2));
  return sqArr.sort(sortArr);
};

const sortArr = (a, b) => a - b;

console.log(sortedSquares([-4, -1, 0, 3, 10]));
