var firstMissingPositive = function(nums) {
    nums = nums.filter(e => e > 0)
    if (Math.min(...nums) > 1) return 1
    else {
        for (let i = 0; i < nums.length; i++) {
            for (let j = i + 1; j < nums.length; j++) {
                if (nums[j] < nums[i]) {
                    let t = nums[j]
                    nums[j] = nums[i]
                    nums[i] = t
                }
            }
            if (i > 0 && nums[i] - nums[i-1] > 1) {
            	return nums[i-1] + 1
            }
        }
    }
    return nums.pop() + 1
};

console.log(firstMissingPositive([1,2,3,4]))