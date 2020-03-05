/** 正则表达式匹配
 * 思路 递归
 * 如果要证明 s， p匹配
 * 1. 对于不含有*的情况 可以递归为  (s[i] === p[i] || p[i] === '.') && isMatch(s[i + 1], p[j+1]);
 * 2. 对于含有*的情况, 当前位置的下一位置含有*
 *    a. s[i] !== p[i] 此时判断 isMath(s[i], p[i+2])
 *    b. s[i] === p[i] 此时可以匹配一次或者多次  递归判断isMatch(s[i+1], p[i])
 * 动态规划是针对递归的迭代方案
 * 参考地址： https://leetcode-cn.com/problems/regular-expression-matching/solution/zheng-ze-biao-da-shi-pi-pei-cshi-xian-liang-chong-/
 * https://www.cnblogs.com/enjoy233/p/10408677.html
 *
*/
function isMatch(s, p) {
    if (s.length > 0 && p.length === 0) {
        return false;
    }
    let dp =[];
    dp[s.length] = [];
    dp[s.length][p.length] = true;
    for(let i = s.length; i >= 0; i--) {
        for (let j = p.length - 1; j >=0;j--) {
            let firstMatch = i < s.length && (
                s[i] === p[j] || p[j] === '.'
            )
            if (!dp[i]) {
                dp[i] = [];
            }
            if (j + 1 < p.length && p[j+1] === '*') { 
                //  firstMatch && dp[i+1][j] *匹配一个或多个的情况
                dp[i][j] = dp[i][j+2] || firstMatch && dp[i+1][j];
            } else {
                dp[i][j] = firstMatch && !!dp[i+1][j+1];  // !!dp[i+1][j+1] 当一个子串有长度，另一个已经为空时
            }
        }
    }
    return dp[0][0];
}
// console.log(isMatch('aab', 'c*a*b'))
// console.log(isMatch('aa', 'a'))
// console.log(isMatch('aa', 'a*'))
// console.log(isMatch('ab', '.*'))
// console.log(isMatch('mississippi', 'mis*is*p*.'))
console.log(isMatch("a", ''));