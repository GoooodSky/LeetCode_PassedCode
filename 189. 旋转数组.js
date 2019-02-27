var rotate = function(nums, k) {
    for(let i=0;i<k;i++){
        m = nums[nums.length-1]
        nums.pop()
        nums.unshift(m)
    }
    
};