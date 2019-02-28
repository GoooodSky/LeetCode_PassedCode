var sortArrayByParityII = function(A) {
    var even = 0
    var odd = 1
    var result = []
    A.forEach((n) => {
        if (n % 2 === 0) {
            result[even] = n
            even += 2
        } else {
            result[odd] = n
            odd += 2
        }
    })
    return result
};

console.log(sortArrayByParityII([3,1,2,4]))