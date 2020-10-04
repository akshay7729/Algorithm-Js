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

pivot([4, 18, 2, 11, 5, 76, 6, -2]);

const quickSort = (arr, left = 0, right = arr.length - 1) => {
  if (left < right) {
    let pivotIndex = pivot(arr, left, right);
    // left
    quickSort(arr, left, pivotIndex - 1);
    //right
    quickSort(arr, pivotIndex + 1, right);
  }
  return arr;
};

quickSort([4, 6, 9, 1, 2, 5, 3]);
