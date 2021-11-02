const minMaxSum = (arr) => {
  const sortedArr = arr.sort(sort);
  const getSum = sortedArr.reduce((a, b) => {
    return a + b;
  });
  console.log(
    `${getSum - sortedArr[sortedArr.length - 1]} ${getSum - sortedArr[0]}`
  );
};

const sort = (a, b) => a - b;

minMaxSum([1, 9, 5, 7, 3]);
