/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {

  var numMap = {};
  var ans = [];

  for (var i = 0; i < nums.length; i++) {

    var anotherNum = target - nums[i];

    if (!numMap.hasOwnProperty(nums[i])) {
      numMap[nums[i]] = i + 1;
    }

    if (numMap.hasOwnProperty(anotherNum)) {
      ans[0] = numMap[anotherNum];
      ans[1] = i + 1;
      if (ans[0] !== ans[1]) {
          break;
      }
    }
  }
  return ans;
};
