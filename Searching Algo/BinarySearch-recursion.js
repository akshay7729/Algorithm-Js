const binarySearch = (arr, val, start = 0, end = arr.length - 1) => {
  let mid = Math.floor((end + start) / 2);

  if (start > end) {
    return false;
  }

  if (arr[mid] === val) {
    return mid;
  }

  if (arr[mid] > val) {
    return binarySearch(arr, val, start, mid - 1);
  } else {
    return binarySearch(arr, val, mid + 1, end);
  }
};

console.log(binarySearch([2, 5, 6, 9, 13, 15, 28, 30], 15));
