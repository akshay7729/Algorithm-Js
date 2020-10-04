// Big O - O(n-square)
const insertionSort = (arr) => {
  for (var i = 1; i < arr.length; i++) {
    var currentVal = arr[i];
    for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = currentVal;
    console.log(arr);
  }
  console.log("final", arr);
  return arr;
};

insertionSort([2, 35, 7, 29, 14]);
