/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  const numMap = {};

  nums.forEach((num) => {
    if (numMap[num] === undefined) {
      numMap[num] = 1;
    } else {
      numMap[num]++;
    }
  });

  return Object.keys(numMap)
    .sort((a, b) => numMap[b] - numMap[a])
    .map((num) => parseInt(num))
    .slice(0, k);
};
