/**
 * 插入排序
 */

function insertionSort(arr) {
  const len = arr.length

  for (let i = 1; i < len; i++) {
    const temp = arr[i]

    let preIndex = i - 1
    while (arr[preIndex] > temp) {
      arr[preIndex + 1] = arr[preIndex]
      preIndex -= 1
    }

    arr[preIndex + 1] = temp
  }

  return arr
}

console.log(insertionSort([2, 3, 1, 4, 5, 8, 7]))
