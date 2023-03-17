/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
  if (rowIndex === 0) {
    return [1];
  }

  if (rowIndex === 1) {
    return [1, 1];
  }

  const prevArray = getRow(rowIndex - 1);
  const nextArray = [1];

  for (let i = 0; i < prevArray.length - 1; i++) {
    nextArray.push(prevArray[i] + prevArray[i + 1]);
  }

  nextArray.push(1);

  return nextArray;
};
