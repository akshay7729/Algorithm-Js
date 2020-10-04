const swap = (arr, i, j) => {
  var temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
};

const pivot = (arr, start = 0, end = arr.length + 1) => {
  // assume pivat is always the first element
  var pivot = arr[start];
  var swapIndex = start;

  for (var i = start + 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      swapIndex++;
      // swap the pilot from the start
      swap(arr, swapIndex, i);
    }
  }
  swap(arr, start, swapIndex);
  console.log(arr);
  return swapIndex;
};

pivot([4, 8, 2, 1, 5, 7, 6, 3]);
