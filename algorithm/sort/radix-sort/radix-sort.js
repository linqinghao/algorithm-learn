function radixSort(arr, maxDigit) {
  let counter = []
  let mod = 10
  let dev = 1
  for (let i = 0; i < maxDigit; i++) {
    for (let j = 0; j < arr.length; j++) {
      let bucket = parseInt((arr[j] % mod) / dev)
      if (counter[bucket] == null) {
        counter[bucket] = []
      }
      counter[bucket].push(arr[j])
    }
    let pos = 0
    for (let j = 0; j < counter.length; j++) {
      let value = null
      if (counter[j] != null) {
        while ((value = counter[j].shift()) != null) {
          arr[pos++] = value
        }
      }
    }
    dev *= 10
    mod *= 10
  }
  return arr
}

console.log(radixSort([2, 3, 5, 7, 8, 1, 10], 2))
