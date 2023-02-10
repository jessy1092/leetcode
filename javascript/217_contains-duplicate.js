/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  var numMap = {};

  for (let i = 0; i < nums.length; i++) {
    if (numMap[nums[i]] === true) {
      return true;
    }

    numMap[nums[i]] = true;
  }

  return false;
};
