function naiveSearch(long, pattern) {
  var count = 0;
  for (var i = 0; i < long.length; i++) {
    for (var j = 0; j < pattern.length; j++) {
      console.log(pattern[j], long[i + j]);
      if (pattern[j] !== long[i + j]) break;
      if (j === pattern.length - 1) count++;
    }
  }
  console.log("count", count);
  return count;
}

naiveSearch("lorie loled", "lole");
