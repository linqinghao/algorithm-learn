// 最大子序列和

// Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

// Example:

// Input: [-2,1,-3,4,-1,2,1,-5,4],
// Output: 6
// Explanation: [4,-1,2,1] has the largest sum = 6.
// Follow up:

// If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.
function lss(nums) {
  const len = nums.length;
  let max = nums[0];
  let min = 0;
  let sum = 0;
  for (let i = 0; i < len; i++) {
    sum += nums[i];
    if (sum - min > max) max = sum - min;
    if (sum < min) {
      min = sum;
    }
  }

  return max;
}

function lss2(nums) {
  const len = nums.length;
  let max = nums[0];
  for (let i = 1; i < len; i++) {
    nums[i] = Math.max(0, nums[i - 1]) + nums[i];
    if (nums[i] > max) max = nums[i];
  }

  return max;
}
