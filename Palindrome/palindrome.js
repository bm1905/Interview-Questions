// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
    const reversed = str.split('').reduce((a, b) => (b, a), '');
    return str === reversed;
}


// Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

//     Note: For the purpose of this problem, we define empty string as valid palindrome.

//         Example 1:

// Input: "A man, a plan, a canal: Panama"
// Output: true
// Example 2:

// Input: "race a car"
// Output: false

/**
 * @param {string} s
 * @return {boolean}
 */

// 63%

var isPalindrome = function (s) {
    let re = /[\W_]/g;
    let arr = s.toLowerCase().replace(re, '');
    result = true;

    for (let i = 0; i <= Math.floor(arr.length / 2); i++) {
        if (arr[i] === arr[arr.length - 1 - i]) {
            continue;
        }
        else {
            result = false;
            break;
        }
    }
    return result;
};

/**
 * @param {string} s
 * @return {boolean}
 */

// 88%

var isPalindrome = function (s) {
    let re = /[\W_]/g;
    let arr = s.toLowerCase().replace(re, '');

    const reversed = arr.split('').reduce((a, b) => (b + a), '');
    return arr === reversed;
};

/**
 * @param {string} s
 * @return {boolean}
 */

// 95%

var isPalindrome = function (s) {
    let re = /[\W_]/g;
    let arr = s.toLowerCase().replace(re, '');

    i = 0;
    j = arr.length - 1;

    while (i < j) {
        if (arr[i] !== arr[j]) {
            return false;
        }
        i++;
        j--;
    }
    return true;
};


