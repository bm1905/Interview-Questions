/**
 * Given an array of n integers nums and a target, find the number of index triplets i, j, k
 * with 0 <= i < j < k < n that satisfiy the condtion nums[i] + nums[j] + nums[k] < target.
 *
 * d= [1, 2, 3, 4, 5],  t = 8
 * n = 4
 *
 * (1, 2, 3) = 6 <= 8
 * (1, 2, 4) = 7 <= 8
 * (1, 2, 5) = 8 <= 8
 * (1, 3, 4) = 8 <= 8
 *
 * nums = [-2, 0, 1, 3] and target = 2
 * n = 2
 *
 * (-2, 0, 1) = -1 <= 2
 * (-2, 0, 3) = 1 <= 2
 */

const triplets = (t, d) => {
    if (d === null || d.length < 3) return 0;
    d.sort((a, b) => a - b);
    let result = 0;

    for (let i = 0; i < d.length - 2; i++) {
        result += duplets(d, t - d[i], i + 1);
    }

    return result;
}

const duplets = (nums, target, start) => {
    let sum = 0;
    let left = start;
    let right = nums.length - 1;
    while (left < right) {
        if (nums[left] + nums[right] <= target) {
            sum += right - left;
            left++;
        }
        else {
            right--;
        }
    }
    return sum;
}