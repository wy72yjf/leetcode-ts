/** 
 * 罗马数字转整数
 * 
*/

function romanToInt(s) {
  let numMap ={
    'M': 1000,
    'CM': 900,
    'D': 500,
    'CD': 400,
    'C': 100,
    'XC': 90,
    'L': 50,
    'XL': 40,
    'X': 10,
    'IX': 9,
    'V': 5,
    'IV': 4,
    'I': 1
  }
  let index = 0;
  let result = 0;
  while (index < s.length) {
    let sub = s.substring(index, index+2);
    if (!numMap[sub]) {
      sub = s[index]
    }
    result += numMap[sub];
    index += sub.length;
  }

  return result;
}

console.log(romanToInt('III'));
console.log(romanToInt('IV'));
console.log(romanToInt('IX'));
console.log(romanToInt('LVIII'));
console.log(romanToInt('MCMXCIV'));