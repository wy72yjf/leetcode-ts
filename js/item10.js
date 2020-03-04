/** 正则表达式匹配
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
                dp[i][j] = firstMatch && !!dp[i+1][j+1];
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