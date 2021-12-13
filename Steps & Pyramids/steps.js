// make steps with #
// #
// ##
// ###
// ####
// #####

// solution 1
const steps = (n) => {
  for (let i = 1; i < n + 1; i++) {
    console.log("#".repeat(i));
  }
};

// soltion 2 - recursion
const stepsRec = (n) => {
  if (n === 0) {
    return;
  }

  stepsRec(n - 1);
  console.log("#".repeat(n));
};

// steps(10);
stepsRec(15);
