/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function (nums) {
  const splitIndex = nums.length - 1;

  if (splitIndex < 1) {
    return nums;
  }

  if (splitIndex === 1) {
    return nums[0] > nums[1] ? [nums[1], nums[0]] : [nums[0], nums[1]];
  }

  const right = nums.slice(0, splitIndex / 2);
  const left = nums.slice(splitIndex / 2, splitIndex + 1);

  const rightResult = sortArray(right);
  const leftResult = sortArray(left);

  const result = [];

  rightResult.forEach((num) => {
    const leftLength = leftResult.length;
    for (let i = 0; i < leftLength; i++) {
      if (num < leftResult[0]) {
        result.push(num);
        break;
      } else {
        result.push(leftResult.shift());
      }
    }
    if (leftResult.length === 0) {
      result.push(num);
    }
  });

  return result.concat(leftResult);
};
