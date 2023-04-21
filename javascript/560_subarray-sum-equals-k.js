/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
  let count = 0;
  let sum = 0;
  const hashMap = new Map();

  hashMap.set(0, 1);

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];

    // console.log(nums[i], sum, sum - k, hashMap.get(sum - k));

    if (hashMap.has(sum - k)) {
      // console.log("count++", sum, sum - k, hashMap.get(sum - k));

      count += hashMap.get(sum - k);
    }
    hashMap.set(sum, (hashMap.get(sum) || 0) + 1);
  }

  return count;
};

// console.log(subarraySum([1, 2, 3], 3));
