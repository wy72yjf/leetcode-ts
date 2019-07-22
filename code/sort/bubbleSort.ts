// 冒泡排序
export default function(ary: number[]): number[] {
  for (let i = ary.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (ary[j] > ary[j + 1]) {
        [ary[j], ary[j + 1]] = [ary[j + 1], ary[j]]
      }
    }
  }
  return ary
}
