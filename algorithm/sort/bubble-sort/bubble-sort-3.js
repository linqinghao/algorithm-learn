/**
 * 冒泡排序（优化版）
 */

function bubbleSort(arr) {
  let len = arr.length
  let start = 0
  let end = len - 1
  while (start < end) {
    for (let i = start; i < end; i++) {
      if (arr[i] > arr[i + 1]) {
        ;[arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]
      }
    }
    end -= 1
    for (let i = end; i > start; i--) {
      if (arr[i - 1] > arr[i]) {
        ;[arr[i - 1], arr[i]] = [arr[i], arr[i - 1]]
      }
    }
    start += 1
  }
  return arr
}

let arr = [2, 3, 1, 4, 5, 6, 9, 10, 7, 8]

console.log(bubbleSort(arr))
