/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const numMap = {};
  const ans = [];

  for (let i = 0; i < nums.length; i++) {
    const anotherNum = target - nums[i];

    if (!numMap.hasOwnProperty(nums[i])) {
      numMap[nums[i]] = i;
    }

    if (numMap.hasOwnProperty(anotherNum)) {
      ans[0] = numMap[anotherNum];
      ans[1] = i;
      if (ans[0] !== ans[1]) {
        break;
      }
    }
  }
  return ans;
};
