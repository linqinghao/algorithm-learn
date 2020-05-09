function countingSort(arr, maxValue) {
  let bucket = new Array(maxValue + 1)
  let sortIndex = 0
  let len = arr.length
  let bucketLen = maxValue + 1

  for (let i = 0; i < len; i++) {
    if (!bucket[arr[i]]) {
      bucket[arr[i]] = 0
    }
    bucket[arr[i]]++
  }
  console.log(bucket)

  for (let j = 0; j < bucketLen; j++) {
    while (bucket[j] > 0) {
      arr[sortIndex++] = j
      bucket[j]--
    }
  }
  return arr
}

console.log(countingSort([3, 2, 2, 1, 4, 6, 8, 9, 5, 3], 9))
