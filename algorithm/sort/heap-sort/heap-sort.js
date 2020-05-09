/**
 * 堆排序
 */

function heapSort(arr) {
  const len = arr.length

  if (len <= 1) return arr

  // 构造大顶堆
  buildHeap(arr)

  for (let i = len - 1; i >= 0; i--) {
    // 堆首与堆尾互换
    ;[arr[i], arr[0]] = [arr[0], arr[i]]
    // 再次调整为大顶堆
    headAdjust(arr, 0, i - 1)
  }

  return arr
}

function buildHeap(arr) {
  const len = arr.length
  for (let i = Math.floor(len / 2); i >= 0; i--) {
    headAdjust(arr, i, len)
  }
}

function headAdjust(arr, i, len) {
  // 取左孩子结点
  let child = 2 * i + 1
  while (child <= len) {
    let temp = arr[i]

    // 如果右孩子存在且其值大于左孩子的值，则将child指向右孩子
    if (child + 1 <= len && arr[child] < arr[child + 1]) {
      child = child + 1
    }

    // 如果当前结点的值小于其孩子结点的值，则交换，直至循环结束
    if (arr[i] < arr[child]) {
      arr[i] = arr[child]
      arr[child] = temp
      i = child
      child = 2 * i + 1
    } else {
      break
    }
  }
}

console.log(heapSort([2, 3, 1, 4, 5, 8, 7]))
