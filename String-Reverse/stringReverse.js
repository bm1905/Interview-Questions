// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    return str.split('').reduce((a, b) => (b + a), '');
}


// Write a function that reverses a string.The input string is given as an array of characters char[].

// Do not allocate extra space for another array, you must do this by modifying the input array in -place with O(1) extra memory.

// You may assume all the characters consist of printable ascii characters.
// Example 1:

// Input: ["h", "e", "l", "l", "o"]
// Output: ["o", "l", "l", "e", "h"]
// Example 2:

// Input: ["H", "a", "n", "n", "a", "h"]
// Output: ["h", "a", "n", "n", "a", "H"]

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
    leftIndex = 0;
    rightIndex = s.length - 1;

    while (leftIndex !== rightIndex && leftIndex < rightIndex) {
        [s[leftIndex], s[rightIndex]] = [s[rightIndex], s[leftIndex]];
        leftIndex++;
        rightIndex--;
    }
};

var reverseString = function (s) {
    for (let i = 0; i < (s.length - 1) / 2; i++) {
        [s[i], s[s.length - 1 - i]] = [s[s.length - 1 - i], s[i]]
    }

};