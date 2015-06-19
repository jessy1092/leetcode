/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {

  var maxNum = 0;
  var tmpSubString = "";

  for (i = 0; i < s.length; i++) {

    var lastMatchPos = tmpSubString.lastIndexOf(s[i]);

    if (lastMatchPos >= 0) {
      if (tmpSubString.length > maxNum) {
        maxNum = tmpSubString.length;
      }
      tmpSubString = tmpSubString.substring(lastMatchPos + 1);
    }
    tmpSubString += s[i];
  }
  if (tmpSubString.length > maxNum) {
    maxNum = tmpSubString.length;
  }
  return maxNum;
};
