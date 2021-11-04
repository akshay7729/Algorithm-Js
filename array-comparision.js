// a = [1, 2, 3]
// b = [3, 2, 1]
// For elements *0*, b is awarded a point because a[0] .
// For the equal elements a[1] and b[1], no points are earned.
// Finally, for elements 2, a[2] > b[2] so a receives a point.
// The return array is [1, 1] with a's score first and a's second.

// assumtion - both arrays have equal length

const arrayComparision = (a, b) => {
  let arr1Score = 0;
  let arr2Score = 0;
  for (let i = 0; i < a.length; i++) {
    if (a[i] > b[i]) {
      arr1Score++;
    } else if (b[i] > a[i]) {
      arr2Score++;
    }
  }
  return [arr1Score, arr2Score];
};

console.log(arrayComparision([1, 2, 3], [3, 2, 1]));
