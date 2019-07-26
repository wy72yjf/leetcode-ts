// 反转字符串中的单词
// https://leetcode-cn.com/problems/reverse-words-in-a-string-iii/
export default function(str: string): string {
  return str.split('').reverse().join('').split(' ').reverse().join(' ')
}
