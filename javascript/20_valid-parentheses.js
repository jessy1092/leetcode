/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  var leftBracket = ["(", "{", "["];

  var tmpPush = [];

  for (let i = 0; i < s.length; i++) {
    const checkString = s[i];

    if (tmpPush.length === 0) {
      if (leftBracket.includes(checkString)) {
        tmpPush.push(checkString);
      } else {
        return false;
      }
      continue;
    }

    const lastIndex = tmpPush.length - 1;

    if (leftBracket.includes(checkString)) {
      tmpPush.push(checkString);
    } else {
      const lastLeftBracket = tmpPush[lastIndex];
      if (
        (lastLeftBracket === "(" && checkString === ")") ||
        (lastLeftBracket === "{" && checkString === "}") ||
        (lastLeftBracket === "[" && checkString === "]")
      ) {
        tmpPush.pop();
      } else {
        return false;
      }
    }
  }

  return tmpPush.length === 0;
};
