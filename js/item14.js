/** 
 * 最长公共前缀
 * 采用二分方案
 * 参考： https://leetcode-cn.com/problems/longest-common-prefix/solution/zui-chang-gong-gong-qian-zhui-by-leetcode/
*/

function longestCommonPrefix (strs) {
  if (strs.length === 0) return '';
  return recuPrefix(strs, 0, strs.length - 1);

}
function recuPrefix(strs, l, r) {
  if (l === r) {
    return strs[l];
  }
  let mid = Math.floor((l + r) / 2);
  let lcpL = recuPrefix(strs, l, mid);
  let lcpR = recuPrefix(strs, mid + 1, r);
  return compareTow(lcpL, lcpR);
}

function compareTow(strL, strR) {
 let min = Math.min(strL.length, strR.length);
 let i = 0;
 while (i < min) {
   if (strL[i] !== strR[i]) {
     return strL.substring(0, i);
   }
   i++;
 }
 return strL.substring(0, min);
}

console.log(longestCommonPrefix(["flower","flow","flight"]))