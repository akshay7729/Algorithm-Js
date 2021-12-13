const pyramid = (n) => {
  const midPoint = Math.floor((2 * n - 1) / 2);

  for (let row = 0; row < n; row++) {
    let level = "";
    for (let col = 0; col < 2 * n - 1; col++) {
      if (midPoint - row <= col && midPoint + row >= col) {
        level += "#";
      } else {
        level += " ";
      }
    }
    console.log(level);
  }
};

// solution 2
const pyramidRec = (n, row = 0, level = "") => {
  // base scenario
  if (row === n) {
    return;
  }

  if (level.length === 2 * n - 1) {
    console.log(level);
    return pyramidRec(n, row + 1);
  }

  const midPoint = Math.floor((2 * n - 1) / 2);
  let add;

  if (midPoint - row <= level.length && midPoint + row >= level.length) {
    add = "#";
  } else {
    add = " ";
  }

  pyramidRec(n, row, level + add);
};

pyramid(6);
pyramidRec(6);
