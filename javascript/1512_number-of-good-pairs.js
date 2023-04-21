/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function (nums) {
  const numMap = {};
  let pairs = 0;

  nums.forEach((num) => {
    if (numMap[num] === undefined) {
      numMap[num] = 1;
    } else {
      numMap[num]++;
    }
  });

  Object.keys(numMap).forEach((key) => {
    const count = numMap[key];
    if (count > 1) {
      pairs += (count * (count - 1)) / 2;
    }
  });

  return pairs;
};
