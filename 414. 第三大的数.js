var thirdMax = function(nums) {
    var result = [...new Set(nums.sort((a, b) => b - a))]
    if(result.length > 2)
        return result[2]
    else
        return result[0]
};
console.log(thirdMax([3, 3, 4, 3, 4, 3, 0, 3, 3]))