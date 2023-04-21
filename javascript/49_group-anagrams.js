/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const anagramMap = {};
  const result = [];

  strs.forEach((str) => {
    const sortedStr = str.split("").sort().join("");
    if (anagramMap[sortedStr] === undefined) {
      anagramMap[sortedStr] = [str];
    } else {
      anagramMap[sortedStr].push(str);
    }
  });

  Object.keys(anagramMap).forEach((key) => {
    result.push(anagramMap[key]);
  });

  return result;
};
