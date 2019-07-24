// 快速排序
export default function(ary: number[]): number[] {
  const quickSort = function(ary: number[]): number[] {
    const len = ary.length
    if (len < 2) {
      return ary
    } else {
      const center = ary[0]
      const left = []
      const right = []
      for (let i = 1; i < len; i++) {
        const tmp = ary[i]
        if (tmp < center) {
          left.push(tmp)
        } else {
          right.push(tmp)
        }
      }
      return quickSort(left).concat(center, quickSort(right))
    }
  }
  return quickSort(ary)
}
