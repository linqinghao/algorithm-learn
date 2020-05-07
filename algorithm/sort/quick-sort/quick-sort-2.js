/**
 * 快速排序(in-place)
 */

function quickSort(arr, start = 0, end = arr.length - 1) {
  if (end - start < 1) {
    return
  }
  const target = arr[start]
  let l = start
  let r = end
  while (l < r) {
    while (l < r && arr[r] >= target) {
      r--
    }
    arr[l] = arr[r]
    while (l < r && arr[l] < target) {
      l++
    }
    arr[r] = arr[l]
  }
  arr[l] = target
  quickSort(arr, start, l - 1)
  quickSort(arr, l + 1, end)
  return arr
}

console.log(quickSort([5, 6, 4, 8, 3, 2, 9, 1, 7]))
