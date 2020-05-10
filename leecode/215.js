// Find the kth largest element in an unsorted array. Note that it is the kth largest element in the sorted order, not the kth distinct element.

// Example 1:

// Input: [3,2,1,5,6,4] and k = 2
// Output: 5
// Example 2:

// Input: [3,2,3,1,2,4,5,5,6] and k = 4
// Output: 4
// Note:
// You may assume k is always valid, 1 ≤ k ≤ array's length.

function swap(arr, a, b) {
  ;[arr[a], arr[b]] = [arr[b], arr[a]]
}

function quickSelect(nums, k, start, end) {
  if (end < start) return
  let pivot = nums[start]
  let l = start + 1
  let r = end
  while (l <= r) {
    if (nums[l] < pivot) {
      l++
      continue
    }
    if (nums[r] >= pivot) {
      r--
      continue
    }
    swap(nums, l, r)
  }

  swap(nums, start, r)
  console.log(nums, l, r)

  if (r == k) return nums[r]

  if (r < k) {
    return quickSelect(nums, k, l, end)
  } else {
    return quickSelect(nums, k, start, r - 1)
  }
}

var findKthLargest = function (nums, k) {
  let len = nums.length
  return quickSelect(nums, len - k, 0, len - 1)
}

console.log(findKthLargest([7, 6, 5, 4, 3, 2, 1], 2))
