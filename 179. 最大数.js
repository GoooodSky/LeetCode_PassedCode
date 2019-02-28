var largestNumber = function(nums) {
    return nums.map(n => n.toString()).sort((a, b) => { return (b + a) > (a + b) ? 1 : -1 }).join('').replace(/^0+\B/, '')
};



console.log(largestNumber([3, 30, 34, 5, 9]))