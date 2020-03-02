/** 
 * 最长回文字符
 * 动态规划  dp[i][j] = dp[i+1][j-1] (si == sj)  
 * dp[i+1][j-1]位于dp[i][j] 左下方 求解过程为至下向上的上三角矩阵
 * 约束条件
 * 1， i < j , i+1 <= j-1;
 * 2. 子串只剩一个时 si == si, 子串剩余两个时 si == sj
 * 
*/

// 动态规划方案 有些超时
function longestPalindrome(s) {
    if(s.length == 0) {
        return "";
    }
    let dp = [];
    for (let i = 0, len = s.length; i < len; i++) {
        dp[i] = [];
        dp[i][i] = true;
    }
    let len = s.length;
    let max = 1;
    let result = s[0];
    for (let i = len - 1; i >= 0; i--) {
        for(j = i + 1; j < len; j++) {
            if ((j - i) >= 2) {
                if (s[i] === s[j]) {
                    dp[i][j] = dp[i + 1][j - 1];
                } else {
                    dp[i][j] = false;
                }
            } else if ((j - i) === 1) {
                if (s[i] === s[j]) {
                    dp[i][j] = true;
                }
            }
            if (dp[i][j] && max < (j - i + 1)) {
                max = j - i + 1;
                result = s.substring(i, j+1);
            }
        }
    }
    return result
}

// let result = longestPalindrome("babad");
// console.log(result);

/** 
 * 马拉车算法
 * 参考地址： https://leetcode-cn.com/problems/longest-palindromic-substring/solution/zhong-xin-kuo-san-dong-tai-gui-hua-by-liweiwei1419/
*/


function centerSpread(s, center) {
    let len = s.length;
    let i = center - 1;
    let j = center + 1;
    let step = 0;
    while (i >= 0 && j < len && s[i] === s[j]) {
        i--;
        j++;
        step++;
    }
    return step;
}
function longestPalindrome2(s) {
    if(s.length <= 1) {
        return s;
    }
    let s2 = '#' + s.split('').join('#') + '#';
    let sLen = s2.length;
    let maxLen = 1;
    for (let i = 0; i < sLen; i++) {
        let curP = centerSpread(s2, i);
        if (curP > maxLen) {
            maxLen = curP;
            start = Math.floor((i - maxLen) / 2);
        }
    }
    return s.substring(start, start + maxLen);
}

let result = longestPalindrome2('cbbd');
console.log(result);