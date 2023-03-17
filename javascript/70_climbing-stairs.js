/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n, memo = {}) {
  if (n <= 2) {
    return n;
  }

  if (memo[n]) {
    return memo[n];
  }

  memo[n] = climbStairs(n - 1, memo) + climbStairs(n - 2, memo);

  return memo[n];
};

// Input: n = 3
// Output: 3
// Explanation: There are three ways to climb to the top.
// 1. 1 step + 1 step + 1 step
// 2. 1 step + 2 steps
// 3. 2 steps + 1 step

// Input: n = 4
// Output: 4
// Explanation: There are three ways to climb to the top.
// 1. 1 step + 1 step + 1 step + 1 step
// 2. 1 step + 1 step + 2 steps
// 3. 1 step + 2 steps + 1 step
// 4. 2 steps + 1 step + 1 step
// 5. 2 steps + 2 steps
