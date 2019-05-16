var maxProfit = function(prices) {
  let profit = prices.map((val, day, arr) => {
    return Math.max(...arr.slice(day + 1)) - val
  })
  let maxProfit = Math.max(...profit)
  return maxProfit < 0 ? 0 : maxProfit
}

console.log(maxProfit([7, 6, 4, 3, 1]))
