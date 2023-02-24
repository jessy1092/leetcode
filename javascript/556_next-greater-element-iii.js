/**
 * @param {number} n
 * @return {number}
 */
var nextGreaterElement = function (n) {
  const nums = n
    .toString()
    .split("")
    .map((num) => parseInt(num));

  let startReverseIndex = nums.length;

  for (let i = nums.length - 1; i > 0; i--) {
    if (nums[i] > nums[i - 1]) {
      for (let j = nums.length - 1; j >= i; j--) {
        if (nums[j] > nums[i - 1]) {
          // Swap
          [nums[i - 1], nums[j]] = [nums[j], nums[i - 1]];
          startReverseIndex = i;
          break;
        }
      }

      break;
    }
  }

  // console.log(nums.toString());

  for (let j = startReverseIndex; j < nums.length - 1; j++) {
    for (let i = startReverseIndex; i < nums.length - 1; i++) {
      if (nums[i] > nums[i + 1]) {
        // Swap
        [nums[i], nums[i + 1]] = [nums[i + 1], nums[i]];
      }
    }
  }

  // console.log(nums.toString());

  const numNum = parseInt(nums.join(""));

  if (numNum === n || numNum > 2147483647) {
    return -1;
  }

  // console.log(numNum);

  return numNum;
};

nextGreaterElement(230241);
