/** 
 *  整数转罗马数字
 *  条件限制： 给定一个整数，将其转为罗马数字。输入确保在 1 到 3999 的范围内。
 *  思路： 贪心算法， map映射
*/

function intToRoman(num) {
  let numMap =[
    {
      val: 1000,
      key: 'M'
    },
    {
      val: 900,
      key: 'CM'
    },{
      val: 500,
      key: 'D'
    },{
      val: 400,
      key: 'CD'
    },
    {
      val: 100,
      key: 'C'
    },
    {
      val: 90,
      key: 'XC'
    },{
      val: 50,
      key: 'L'
    },{
      val: 40,
      key: 'XL'
    },
    {
      val: 10,
      key: 'X'
    },
    {
      val: 9,
      key: 'IX'
    },{
      val: 5,
      key: 'V'
    },{
      val: 4,
      key: 'IV'
    },{
      val: 1,
      key: 'I'
    }
  ];
  let index = 0;
  let result = '';
  while (index < 13) {
    while (num >= numMap[index].val) {
      num -= numMap[index].val;
      result += numMap[index].key;
    }
    if (num <= 0) {
      break;
    }
    index++
  }
  return result;
}

console.log(intToRoman(1994));
console.log(intToRoman(58));
console.log(intToRoman(9));
console.log(intToRoman(4));
console.log(intToRoman(3));