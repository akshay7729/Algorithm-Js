const getSumOfValuesInArr = (arr, val) => {
  var result = [];
  for (var i = 0; i < arr.length; i++) {
    for (var j = i; j < arr.length; j++) {
      if (arr[j] + arr[i] === val) {
        result.push([arr[i], arr[j]]);
      }
    }
  }
  console.log(result);
  return result;
};

getSumOfValuesInArr([2, 7, 5, 3, 4, 11, 12, 56], 9);
