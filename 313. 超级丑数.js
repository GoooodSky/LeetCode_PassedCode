var nthSuperUglyNumber = function(n, primes) {
  let getPrimes = num => {
    let result = []
    for (let i = 2; i < num / 2 + 1; i++) {
      if (num % i === 0 && getPrimes(i).length == 0) {
        result.push(i)
      }
    }
    return result
  }
  let initial = primes.length
  let arr = [1]
  for (let i = 2; arr.length < n; i++) {
    let resolve = getPrimes(i)
    let after = new Set(Array.from(primes).concat(resolve)).size
    if ((resolve.length > 0 && after == initial) || primes.indexOf(i) != -1) {
      arr.push(i)
    }
  }
  return arr.pop()
}

console.log(nthSuperUglyNumber(800, [(37, 43, 59, 61, 67, 71, 79, 83, 89, 97, 101, 103, 113, 127, 131, 157, 163, 167, 173, 179, 191, 193, 197, 199, 211, 229, 233, 239, 251, 257)]))
