/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
  let startReverseIndex = nums.length;

  for (let i = nums.length - 1; i > 0; i--) {
    let breakLoop = false;
    if (nums[i] > nums[i - 1]) {
      for (let j = nums.length - 1; j >= i; j--) {
        if (nums[j] > nums[i - 1]) {
          // Swap
          [nums[i - 1], nums[j]] = [nums[j], nums[i - 1]];
          startReverseIndex = i;
          breakLoop = true;
          break;
        }
      }

      if (breakLoop) {
        break;
      }
    }
  }

  // console.log(nums);

  if (startReverseIndex === nums.length) {
    nums.reverse();

    // console.log(nums);

    return;
  }

  for (let j = startReverseIndex; j < nums.length - 1; j++) {
    for (let i = startReverseIndex; i < nums.length - 1; i++) {
      if (nums[i] > nums[i + 1]) {
        // Swap
        [nums[i], nums[i + 1]] = [nums[i + 1], nums[i]];
      }
    }
  }

  // console.log(nums);
};

nextPermutation([5, 4, 7, 5, 3, 2]);
