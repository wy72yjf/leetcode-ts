/** 回文数
 * 方法1. 字符串前后对比
 * 方法2. 数字的首位和末尾进行比较， 然后去除首尾的数字继续比较
 * 方法3， 只转化数字的后半部分，取得的结果与前一半比较是否相等
 * 参考 https://leetcode-cn.com/problems/palindrome-number/solution/dong-hua-hui-wen-shu-de-san-chong-jie-fa-fa-jie-ch/
*/

function isPalindrome(x) {
  if (x < 0) {
    return false;
  }
  let div = 1;
  while (Math.floor(x / div) >= 10) {
    div *= 10;
  }
  while (x > 0) {
    let left = Math.floor(x / div);
    let right = Math.floor(x % 10);
    if (left !== right) {
      return false;
    }
    x = Math.floor((x % div) / 10)  // x % div 去头， x/ 去尾
    div /= 100 ;
  }
  return true;
}

// console.log(isPalindrome(1001));

function isPalindrome2(x) {
  if (x < 0 || (x % 10 == 0 && x != 0)) return false;
  let rever = 0;
  while (x > rever) {
    rever = rever * 10 + x % 10;
    x = Math.floor(x/10);
  }
  return x === rever || x === Math.floor(rever/ 10);
}

console.log(isPalindrome2(1001));