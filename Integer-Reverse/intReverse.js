// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
    return parseInt(n.toString().split('').reverse().join('')) * Math.sign(n);
}

module.exports = reverseInt;


// Given a 32 - bit signed integer, reverse digits of an integer.

//     Example 1:

// Input: 123
// Output: 321
// Example 2:

// Input: -123
// Output: -321
// Example 3:

// Input: 120
// Output: 21
// Note:
// Assume we are dealing with an environment which could only store integers within the 32 - bit signed integer range: [−231, 231 − 1].
// For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    limit = Math.pow(2, 31);
    revNum = parseInt(x.toString().split('').reverse().join(''));
    return (revNum >= limit) ? 0 : revNum * Math.sign(x);
};

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    limit = Math.pow(2, 31);
    num = Math.abs(x);

    rev = 0;
    while (num > 0) {
        mod = num % 10;
        rev = rev * 10 + mod;
        num = Math.floor(num / 10);
    }
    return ((rev >= limit) ? 0 : rev * Math.sign(x));
};