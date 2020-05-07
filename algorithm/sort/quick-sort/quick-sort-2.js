/**
 * 快速排序(in-place)
 */

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    const pivot = partition(arr, left, right)
    quickSort(arr, left, pivot - 1)
    quickSort(arr, pivot + 1, right)
  }
  return arr
}

function partition(arr, left, right) {
  let pivot = left
  for (let i = left + 1; i <= right; i++) {
    if (arr[i] < arr[left]) {
      ;[arr[i], arr[pivot]] = [arr[pivot], arr[i]]
      pivot += 1
    }
  }
  ;[arr[left], arr[pivot]] = [arr[pivot], arr[left]]
  return pivot
}

console.log(quickSort([5, 6, 4, 8, 3, 2, 9, 1, 7]))
