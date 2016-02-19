/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    if (x > - 10 && x < 10) {
        return x;
    }

    var tmp = x.toString();
    var result = '';

    if (x < 0) {
        result = '-' + tmp.substring(1, tmp.length).split('').reverse().join('');
    } else {
        result = tmp.split('').reverse().join('');
    }

    var resultInt = parseInt(result);

    if (resultInt > 0x7fffffff || resultInt < -0x7fffffff) {
        return 0;
    }

    return resultInt;
};
