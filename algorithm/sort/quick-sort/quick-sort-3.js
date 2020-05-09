/**
 * 快速排序（写法3）
 */

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left > right) return

  // 分区
  let pivot = patition(arr, left, right)

  quickSort(arr, left, pivot - 1)
  quickSort(arr, pivot + 1, right)

  return arr
}

function patition(arr, left, right) {
  // 以最右边索引为基准值
  let pivot = right
  // 交换位置起始索引
  let sortIndex = left

  for (let i = left; i < right; i++) {
    if (arr[i] < arr[pivot]) {
      // 扫描当前元素，若小于基准值则交换位置，并且交换位置起始索引移动至下一个
      ;[arr[i], arr[sortIndex]] = [arr[sortIndex], arr[i]]
      sortIndex += 1
    }
  }
  // 交换基准值到中间位置
  ;[arr[sortIndex], arr[pivot]] = [arr[pivot], arr[sortIndex]]
  // 返回基准值
  return sortIndex
}

console.log(quickSort([5, 6, 4, 8, 3, 2, 9, 1, 7]))
