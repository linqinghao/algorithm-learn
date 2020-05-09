/**
 * 冒泡排序(优化版)
 */

function bubbleSort(arr) {
  let i = arr.length - 1
  while (i > 0) {
    let pos = 0 // 记录每趟最后的交换位置
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        pos = j
        ;[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
      }
    }
    i = pos
  }
  return arr
}

console.log(bubbleSort([2, 1, 3]))
