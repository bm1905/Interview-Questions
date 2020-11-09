
/**
 * Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.
 * Input: nums = [100,4,200,1,3,2]
 * Output: 4
 * Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4
 * 
 * Input: nums = [0,3,7,2,5,8,4,6,0,1], [-5,-4,-3,-1,0,1], [0,1,1,2],[9,1,4,7,3,-1,0,5,8,-1,6],[1,2,5,6,7,8,10,11,15,16,17]
 * Output: 9, 3, 3, 7, 4
 */

/**
* @param {number[]} nums
* @return {number}
*/

var longestConsecutive = function (nums) {
    if (!nums.length > 0 || nums === null) return 0;

    nums = [...new Set(nums)];
    nums.sort((a, b) => a - b);

    let length = 1;
    let storeLength = 1;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] + 1 === nums[i + 1]) {
            length++;
        }
        else {
            if (length >= storeLength) {
                storeLength = length;
            }
            length = 1;
        }
    }
    return storeLength;
};