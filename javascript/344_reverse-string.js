/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
  recursiveReverseString(s, 0);
};

var recursiveReverseString = function (s, i) {
  if (i >= s.length / 2) {
    return;
  }

  [s[i], s[s.length - 1 - i]] = [s[s.length - 1 - i], s[i]];

  recursiveReverseString(s, i + 1);
};

// var reverseString = function (s) {
//   for (let i = 0; i < s.length / 2; i++) {
//     let tmp = s[i];
//     s[i] = s[s.length - 1 - i];
//     s[s.length - 1 - i] = tmp;
//   }
// };
