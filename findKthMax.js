var source = [9, 2, 7, 11, 1, 3, 14, 22];

const KthMax = function (minInd, maxInd, kth) {
  var temp,
    pivotInd = minInd;
  if (minInd >= maxInd) {
    return source[pivotInd];
  }

  for (var i = minInd; i < maxInd; i++) {
    if (source[i] > source[pivotInd]) {
      source[pivotInd] = temp;
      pivotInd++;
    }
  }

  temp = source[pivotInd];
  source[pivotInd] = source[maxInd];
  source[maxInd] = temp;

  if (kth > pivotInd) {
    return KthMax(pivotInd + 1, maxInd, kth);
  } else if (kth < pivotInd) {
    return KthMax(minInd, pivotInd - 1, kth);
  }
};
