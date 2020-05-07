/**
 * 选择排序
 */

function selectionSort(arr) {
  const size = arr.length
  for (let i = 0; i < size; i++) {
    let minIndex = i
    for (let j = i + 1; j < size; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j
      }
    }
    if (i !== minIndex) {
      ;[arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
    }
  }
  return arr
}

let arr = [2, 3, 1, 4, 6, 7, 5, 8, 9]

console.log(selectionSort(arr))
