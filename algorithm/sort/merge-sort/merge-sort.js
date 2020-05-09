/**
 * 归并排序
 */

function mergeSort(arr) {
  let len = arr.length
  if (len < 2) return arr
  let mid = len >> 1
  let left = arr.slice(0, mid)
  let right = arr.slice(mid)
  return merge(mergeSort(left), mergeSort(right))
}

function merge(left, right) {
  let ret = []
  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      ret.push(left.shift())
    } else {
      ret.push(right.shift())
    }
  }

  while (left.length) ret.push(left.shift())
  while (right.length) ret.push(right.shift())

  return ret
}

console.log(mergeSort([5, 6, 8, 3, 2, 9, 1, 7]))
