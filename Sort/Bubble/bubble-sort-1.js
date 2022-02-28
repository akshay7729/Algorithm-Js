// non optimized version -> O(n-square)
const bubbleSort = (arr) => {
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        var temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  console.log("final", arr);
  return arr;
};

bubbleSort([2, 35, 7, 29, 14]);
