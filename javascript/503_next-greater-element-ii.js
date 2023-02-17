/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function (nums) {
  const result = [];
  nums.forEach((num, index) => {
    const newArray = nums.slice(index + 1);
    const newArrayFromHead = nums.slice(0, index);

    const nextGreaterIndex = newArray.findIndex((nextNum) => nextNum > num);
    const nextGreaterIndexFromHead = newArrayFromHead.findIndex(
      (nextNum) => nextNum > num
    );

    if (nextGreaterIndex >= 0) {
      result[index] = newArray[nextGreaterIndex];
    } else if (nextGreaterIndexFromHead >= 0) {
      result[index] = newArrayFromHead[nextGreaterIndexFromHead];
    } else {
      result[index] = -1;
    }
  });

  return result;
};

// console.log(nextGreaterElements([-1, 0]));
