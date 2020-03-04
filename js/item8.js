/** 
 * 字符串转换整数 (atoi)
 * 假设我们的环境只能存储 32 位大小的有符号整数，那么其数值范围为 [−231,  231 − 1]。如果数值超过这个范围，请返回  INT_MAX (231 − 1) 或 INT_MIN (−231) 。
*/

function myAtoi(str) {
  let max1 = 214748364;
  let min1 = -214748364;
  let max2 = 2147483647;
  let min2 = -2147483648;
  let i = 0;
  let j = 0;
  let result = 0;
  let sign = 1;
  while (str[i] === ' ') {
    i++;
  }
  if (str[i] === '+' || str[i] === '-') {
    if (str[i] === '-') {
      sign = -1;
    }
    i++;
  }
  let reg = /\d/;
  if (!reg.test(str[i])) {
    return 0;
  }
  while (i < str.length && reg.test(str[i])) {
    if (result * sign > max1 || (result * sign === max1 && Number(str[i]) > 7) ) {
      return max2;
    }
    if (result * sign < min1 || (result * sign === min1 && Number(str[i]) > 8) ) {
      return min2;
    }
    result = result * 10 + Number(str[i]);
    i++;
  }
  result = result * sign;
  return result;
}

// console.log(myAtoi('4193 with words'))
// console.log(myAtoi('   -42'))
// console.log(myAtoi(' words and 987'))
console.log(myAtoi('-2147483649'))