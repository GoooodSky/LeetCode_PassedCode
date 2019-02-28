var findKthLargest = function(nums, k) {
    for (let i = 0; i < k; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[j] > nums[i]) {
                let t = nums[j]
                nums[j] = nums[i]
                nums[i] = t
            }
        }
    }
    return nums[k - 1]
};

console.log(findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4))