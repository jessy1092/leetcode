/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if (numRows === 1) {
        return s;
    }

    var result = [];
    var arrayId = 0;
    var cursor = -1;
    for (var i = 0; i < s.length; i++) {

        if (arrayId === result.length) {
            result.push('');
        }

        result[arrayId] += s[i];

        if (arrayId === 0 || [arrayId + 1] % numRows === 0) {
            cursor = -cursor;
        }
        arrayId += cursor;
    }

    return result.join('');
};
