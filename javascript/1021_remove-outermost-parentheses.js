/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function (s) {
  const child = [];
  let leftBracketNum = 0;
  let childString = "";

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      leftBracketNum++;
    } else {
      leftBracketNum--;
    }

    if (leftBracketNum === 1 && childString !== "") {
      childString += s[i];
    } else if (leftBracketNum > 1) {
      childString += s[i];
    } else if (leftBracketNum === 0) {
      child.push(childString);
      childString = "";
    }
  }

  return child.join("");
};
