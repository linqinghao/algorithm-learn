function bucketSort(arr, bucketSize) {
  const len = arr.length
  if (arr <= 1) return arr

  let i
  let minValue = arr[0]
  let maxValue = arr[0]
  for (i = 1; i < arr.length; i++) {
    if (arr[i] < minValue) {
      minValue = arr[i] // 输入数据的最小值
    } else if (arr[i] > maxValue) {
      maxValue = arr[i] // 输入数据的最大值
    }
  }

  //桶的初始化
  let DEFAULT_BUCKET_SIZE = 5 // 设置桶的默认数量为5
  bucketSize = bucketSize || DEFAULT_BUCKET_SIZE
  let bucketCount = Math.floor((maxValue - minValue) / bucketSize) + 1
  let buckets = new Array(bucketCount)
  for (i = 0; i < buckets.length; i++) {
    buckets[i] = []
  }

  //利用映射函数将数据分配到各个桶中
  for (i = 0; i < arr.length; i++) {
    buckets[Math.floor((arr[i] - minValue) / bucketSize)].push(arr[i])
  }

  arr.length = 0
  for (i = 0; i < buckets.length; i++) {
    insertionSort(buckets[i]) // 对每个桶进行排序，这里使用了插入排序
    for (var j = 0; j < buckets[i].length; j++) {
      arr.push(buckets[i][j])
    }
  }

  return arr
}
