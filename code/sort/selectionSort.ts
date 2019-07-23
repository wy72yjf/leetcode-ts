// 选择排序
export default function(ary: number[]): number[] {
  for (let i = 0, len = ary.length, min; i < len; i++) {
    min = ary[i]
    for (let j = i + 1; j < len; j++) {
      if (ary[j] < min) {
        [min, ary[j]] = [ary[j], min]
      }
    }
    ary[i] = min
  }
  return ary
}
