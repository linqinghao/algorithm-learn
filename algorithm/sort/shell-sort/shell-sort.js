/**
 * 希尔排序
 */

function shellSort(arr) {
  let size = arr.length
  // 取中间值
  let gap = size >> 1

  while (gap > 0) {
    for (let i = gap; i < size; i++) {
      let temp = arr[i]
      let preIndex = i - gap
      // 若前一个间隔值大于当前间隔值，则交换位置
      for (; preIndex >= 0 && arr[preIndex] > temp; preIndex = preIndex - gap) {
        arr[preIndex + gap] = arr[preIndex]
      }
      // 交换回去
      arr[preIndex + gap] = temp
    }
    gap = gap >> 1
  }
  return arr
}

let arr = [2, 3, 1, 4, 6, 7, 5, 8, 9]

console.log(shellSort(arr))
