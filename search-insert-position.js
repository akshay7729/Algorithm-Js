// Source - LeetCode

// Given a sorted array of distinct integers and a target value,
// return the index if the target is found.
// If not, return the index where it would be if it were inserted in order.

// Example 1:
// Input: nums = [1,3,5,6], target = 5
// Output: 2

// Example 2:
// Input: nums = [1,3,5,6], target = 2
// Output: 1

// Example 3:
// Input: nums = [1,3,5,6], target = 7
// Output: 4

// Example 4:
// Input: nums = [1,3,5,6], target = 0
// Output: 0

// Example 5:
// Input: nums = [1], target = 0
// Output: 0

const searchInsert = (arr, target) => {
  if (arr.indexOf(target) !== -1) {
    return arr.indexOf(target);
  } else {
    // as the array is sorted in asc order
    // we can check if number is greater than the last element in the array
    // if yes we can just get the length of an array, as array starts with 0
    if (target > arr[arr.length - 1]) {
      return arr.length;
    }

    // if the target is less than the first number
    // we can insert before the first array
    else if (target < arr[0]) {
      return 0;
    } else {
      let getClosestVal = closestNum(arr, target);
      console.log("closest val", getClosestVal);
      if (getClosestVal > target) {
        console.log("4", arr.indexOf(getClosestVal));
        return arr.indexOf(getClosestVal);
      } else {
        console.log("5", arr.indexOf(getClosestVal) + 1);
        return arr.indexOf(getClosestVal) + 1;
      }
    }
  }
};

// Find the closest number in the array
const closestNum = (arr, num) => {
  return arr.reduce((a, b) => {
    return Math.abs(b - num) < Math.abs(a - num) ? b : a;
  });
};

searchInsert([1, 2, 3, 5, 8, 13, 21], 9);
