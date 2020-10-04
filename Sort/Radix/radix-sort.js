const getDigit = (num, i) => {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
};

const digitCount = (num) => {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
};

const mostDigitis = (num) => {
  let maxDigits = 0;
  for (let i = 0; i < num.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(num[i]));
  }
  return maxDigits;
};

const radixSort = (nums) => {
  let maxDigitCount = mostDigitis(nums);
  for (let k = 0; k < maxDigitCount; k++) {
    let digitsBucket = Array.from({ length: 10 }, () => []);
    for (let i = 0; i < nums.length; i++) {
      let digit = getDigit(nums[i], k);
      digitsBucket[digit].push(nums[i]);
    }
    nums = [].concat(...digitsBucket);
  }
  console.log(nums);
  return nums;
};

radixSort([23, 12345, 5432, 73456, 4563]);
