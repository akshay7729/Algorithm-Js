// Given an array, rotate the array to the right by k steps, where k is non-negative.

// Input: nums = [1,2,3,4,5,6,7], k = 3
// Output: [5,6,7,1,2,3,4]

const rotateArray = (arr, k) => {
  return [...arr.slice(k + 1), ...arr.slice(0, k + 1)];
};

console.log(rotateArray([1, 2, 3, 4, 5, 6, 7], 3));
