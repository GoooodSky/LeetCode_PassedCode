var removeDuplicates = function(nums) {
    nums = [...new Set(nums)]
    return nums.length + 1
};  