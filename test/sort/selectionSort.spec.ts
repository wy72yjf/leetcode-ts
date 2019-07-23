import sort from '../../code/sort/selectionSort'

test('选择排序', () => {
  expect(sort([22, 5, 3, 95, 64, 78, 1, 24, 18, 53, 4, 90])).toEqual([1, 3, 4, 5, 18, 22, 24, 53, 64, 78, 90, 95])
})
