/**
 * Given two sorted arrays, merge them to form a single, sorted array with all items
 * in non-descending order.
 *
 * a = [1, 5, 7, 7]
 * b = [0, 1, 2, 3]
 * result = [0, 1, 1, 2, 3, 5, 7, 7]
 *
 * a = [1, 2, 3]
 * b = [2, 5, 5]
 * result = [1, 2, 2, 3, 5, 5]
 */

let mergeTwo = (arr1, arr2) => {
    let output = [];

    let m = arr1.length;
    let n = arr2.length;

    if (!m > 0 || !n > 0) {
        return m > 0 ? arr1 : arr2;
    }

    while (n > 0) {
        if (m >= 0 && arr1[m - 1] > arr2[n - 1]) {
            arr1[m + n - 1] = arr1[--m]
        }
        else {
            arr1[m + n - 1] = arr2[--n]
        }
    }

    output = arr1
    return output;
}