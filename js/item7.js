/** 
 * 溢出检查， 按照最大最小值
 * 则其数值范围为 [−2的31次方,  2的31次方 − 1];
*/
 
// js这样写超出时长
function reverse1(x) {
  let rev = 0;
  let max1 = 214748364;
  let min1 = -214748364;
  while (x !== 0) {
    let pop = x % 10;
    x = x > 0 ? Math.floor(x/10) : Math.ceil(x/10);
    // console.log(pop, x);
    if (rev > max1 || (rev === max1 && pop > 7) ) {
      return 0;
    }
    if (rev < min1 || (rev === min1 && pop < -8) ) {
      return 0;
    }
    rev = rev * 10 + pop;
  }
  return rev;
}
// console.log(reverse1(1534236469))
// console.log(reverse1(123))
// console.log(reverse1(-123))
