var sortArrayByParity = function(A) {
    for (let i = 0; i < A.length; i++) {
        for (let j = i + 1; j < A.length; j++) {
            if (A[i] % 2 === 1 && A[j] % 2 === 0) {
                let t = A[j]
                A[j] = A[i]
                A[i] = t
            }
        }
    }
    return A
};

console.log(sortArrayByParity([3, 1, 2, 4]))