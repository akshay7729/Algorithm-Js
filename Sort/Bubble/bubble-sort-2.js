// O(n-square)
// best case -> O(n)
const bubbleSort = (arr) => {
  var noSwaps;
  for (var i = arr.length; i > 0; i--) {
    noSwaps = true;
    for (var j = 0; j < i - 1; j++) {
      console.log(arr);
      if (arr[j] > arr[j + 1]) {
        var temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }
  console.log("final", arr);
  return arr;
};

bubbleSort([2, 35, 7, 29, 14]);
