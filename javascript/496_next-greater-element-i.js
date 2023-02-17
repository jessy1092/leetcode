/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
  const result = [];

  nums1.forEach((num, index) => {
    const numIndex = nums2.indexOf(num);
    const newArray = nums2.slice(numIndex);

    const nextGreater = newArray.find((nextNum) => nextNum > num);
    result[index] = nextGreater || -1;
  });

  return result;
};
