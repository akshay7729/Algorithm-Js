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
    if (target > arr[arr.length - 1]) {
      return arr.length;
    } else if (target < arr[0]) {
      return 0;
    } else {
      let getClosestVal = closestNum(arr, target);
      if (getClosestVal > target) {
        return arr.indexOf(getClosestVal);
      } else {
        return arr.indexOf(getClosestVal) + 1;
      }
    }
  }
};

const closestNum = (arr, num) => {
  return arr.reduce((a, b) => {
    return Math.abs(b - num) < Math.abs(a - num) ? b : a;
  });
};

searchInsert([1, 2, 3, 5, 8, 13, 21], 9);

// line 31
// as the array is sorted in asc order
// we can check if number is greater than the last element in the array
// if yes we can just get the length of an array, as array starts with 0

// line 34
// if the target is less than the first number
// we can insert before the first array

// line 38
// if the closest number is greater than target
// target will take the getClosestVal position
// and getClosestVal will move to the next position

// line 46
// Find the closest number in the array
