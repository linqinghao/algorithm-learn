/**
 * 快速排序
 */

function quickSort(arr) {
  const len = arr.length
  if (len <= 1) return arr
  const left = []
  const right = []
  const mid = len >> 1
  const pivot = arr.splice(mid, 1)[0]

  for (let i = 0; i < len - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }

  return quickSort(left).concat([pivot], quickSort(right))
}

console.log(quickSort([5, 6, 4, 8, 3, 2, 9, 1, 7]))
