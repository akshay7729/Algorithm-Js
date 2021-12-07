const DiagonalDiff = (arr) => {
  let leftToRight = 0;
  let rightToLeft = 0;

  for (let i = 0; i < arr.length; i++) {
    let innerArr = arr[i].length;
    for (let j = 0; j < innerArr; j++) {
      if (i === j) {
        leftToRight += arr[i][j];
        rightToLeft += arr[i][innerArr - j - 1];
      }
    }
  }

  return Math.abs(leftToRight - rightToLeft);
};

console.log(
  DiagonalDiff([
    [1, 2, 3, 5],
    [4, 5, 6, 2],
    [9, 1, 7, 1],
    [1, 4, 2, 6],
  ])
);
