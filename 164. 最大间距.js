var maximumGap = function(nums) {
    if (nums.length < 2) return 0

    nums.sort((a, b) => a - b)
    var max = 0
    for (let i = 0, j = 1; j < nums.length; i++, j++) {
        if (nums[j] - nums[i] > max)
            max = nums[j] - nums[i]
    }
    return max
};


// 性能优化
var maximumGap = function(nums) {
    if (nums.length < 2) return 0

    var max = 0
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[j] < nums[i]) {
                let t = nums[j]
                nums[j] = nums[i]
                nums[i] = t
            }
        }
        if (i > 0) {
            let tmp = nums[i] - nums[i - 1]
            if (tmp > max) max = tmp
        }
    }
    return max
};

console.log(maximumGap([3, 6, 9, 1]))