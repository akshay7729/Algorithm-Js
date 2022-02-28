// You are climbing a staircase. It takes n steps to reach the top.
// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

const climbingStairs = (n) => {
  if (n === 0 || n === 1) {
    return 1;
  }

  return climbingStairs(n - 1) + climbingStairs(n - 2);
};

console.log(climbingStairs(5));
