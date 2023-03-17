/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  if (numRows === 0) {
    return [];
  }

  if (numRows === 1) {
    return [[1]];
  }

  if (numRows === 2) {
    return [[1], [1, 1]];
  }

  const prevArrayList = generate(numRows - 1);
  const lastArray = prevArrayList[prevArrayList.length - 1];
  const nextArray = [1];

  for (let i = 0; i < lastArray.length - 1; i++) {
    nextArray.push(lastArray[i] + lastArray[i + 1]);
  }

  nextArray.push(1);

  return prevArrayList.concat([nextArray]);
};
