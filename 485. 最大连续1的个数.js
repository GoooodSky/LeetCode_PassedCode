var findMaxConsecutiveOnes = function(nums) {
    return Math.max(...nums.join('').split('0').map(e => e.length))
};

console.log(findMaxConsecutiveOnes([1,0,1,1,0,1]))