function getFrequency(arr) {
  var freq = {};
  for (var i = 0; i < arr.length; i++) {
    if (freq[arr[i]]) {
      freq[arr[i]]++;
    } else {
      freq[arr[i]] = 1;
    }
  }
  console.log(freq);
  return freq;
}
getFrequency([1, 2, 3, 1, 2, 1, 1]);
