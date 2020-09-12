const mergeTwoSortedArray = (a, b) => {
  return [...a, ...b].sort();
};

mergeTwoSortedArray([1, 4, 2], [2, 9, 3]);
