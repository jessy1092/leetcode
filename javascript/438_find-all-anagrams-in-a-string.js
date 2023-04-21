/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
  const targetMap = {};
  const targetKey = [];
  const cursorMap = {};
  const result = [];

  for (let i = 0; i < p.length; i++) {
    if (targetMap[p[i]] === undefined) {
      targetMap[p[i]] = 1;
      targetKey.push(p[i]);
    } else {
      targetMap[p[i]]++;
    }
  }

  for (let i = 0; i < s.length; i++) {
    if (cursorMap[s[i]] === undefined) {
      cursorMap[s[i]] = 1;
    } else {
      cursorMap[s[i]]++;
    }

    if (i >= p.length) {
      cursorMap[s[i - p.length]]--;
    }

    // console.log(i, p.length);
    // console.log(cursorMap);
    // console.log(targetMap);
    // console.log(targetKey);
    // console.log(isAnagram(cursorMap, targetMap, targetKey));

    if (i >= p.length - 1 && isAnagram(cursorMap, targetMap, targetKey)) {
      result.push(i - p.length + 1);
    }
  }

  return result;
};

const isAnagram = (cursorMap, targetMap, targetKey) => {
  for (let i = 0; i < targetKey.length; i++) {
    const key = targetKey[i];
    if (cursorMap[key] !== targetMap[key]) {
      return false;
    }
  }

  return true;
};

// console.log(findAnagrams("cbaebabacd", "abc"));
