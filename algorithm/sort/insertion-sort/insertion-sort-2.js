/**
 * 插入排序（优化）
 */

function insertionSort(arr) {
  const len = arr.length
  let fr, lr, mid, cur
  for (let i = 1; i < len; i++) {
    fr = 0
    lr = i - 1
    cur = arr[i]

    while (fr <= lr) {
      mid = (fr + lr) >> 1
      if (cur < arr[mid]) {
        lr = mid - 1
      } else {
        fr = mid + 1
      }
    }
    for (let j = i; j > fr; j--) {
      arr[j] = arr[j - 1]
    }
    arr[fr] = cur
  }
  return arr
}

console.log(insertionSort([2, 3, 1, 4, 5, 8, 7]))
