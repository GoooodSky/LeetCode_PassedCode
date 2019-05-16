var uniquePaths = function(m, n) {
  let dp = (m, n) => {
    if (m === 1 || n === 1) {
      return 1
    } else {
      return dp(m - 1, n) + dp(m, n - 1)
    }
  }
  return dp(m, n)
}

console.log(uniquePaths(51, 9))
