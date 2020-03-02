/** 
参考链接：https://leetcode-cn.com/problems/median-of-two-sorted-arrays/solution/xiang-xi-tong-su-de-si-lu-fen-xi-duo-jie-fa-by-w-2/
*/

/** 
 * 原地数组切分查找
 * 1.总长度为偶数时左半部分的长度等于右半部分,  为奇数时 左半部分 = 有半部分 + 1；
 * i + j = m - i  + n - j  或者 i + j = m - i  + n - j + 1
 * 2. j值应该是大于等于0  j = ((m + n + 1)/2) - i >= 0; 当取最大值m时可以得到约束条件 n >= m
 * 3.左半部分最大的值小于等于右半部分最小的值 max ( A [ i - 1 ] , B [ j - 1 ]）） <= min ( A [ i ] , B [ j ]）
*/

function findMedianSortedArrays(arr1, arr2) {
    let m = arr1.length;
    let n = arr2.length;
    if (m > n) {
        let tmp = arr1;
        arr1 = arr2;
        arr2 = tmp;
        tmp = m;
        m = n;
        n = tmp;
    }
    let iMin = 0, iMax = m;
    while(iMin <= iMax) {
        let i = Math.floor((iMin + iMax) / 2);
        let j = Math.floor((m + n + 1) / 2) - i;
        if (j != 0 && i != m && arr2[j - 1] > arr1[i]) { 
            // i 需要增大, 此种情况i增加， 相应的 j会减小， 边界 j!= 0 && i !=m的约束的原因
            iMin = i + 1;
        } else if (i != 0 && j != n && arr1[i - 1] > arr2[j]) { // i 减小，
            iMax = i - 1;
        } else { // 满足要求后， 需考虑到边界情况
            let maxLeft = 0;
            if (i == 0 ) { 
                maxLeft = arr2[j - 1];
            } else if ( j == 0 ) {
                maxLeft = arr1[i - 1];
            } else {
                maxLeft = Math.max(arr1[i - 1], arr2[j - 1])
            }
            if ((m + n) % 2 == 1) {
                return maxLeft;
            }

            let minRight = 0;
            if ( i == m) {
                minRight = arr2[j]
            } else if (j == n) {
                minRight = arr1[i]
            } else {
                minRight = Math.min(arr1[i], arr2[j]);
            }
            return (maxLeft + minRight) / 2.0
        }
    }
    return 0.0
}

let result = findMedianSortedArrays([1, 2], [3, 4]);
console.log(result);