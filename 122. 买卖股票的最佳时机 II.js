var maxProfit = function(prices) {
  let profit = 0
  prices.forEach((val, day, arr) => {
    if (arr[day + 1] - arr[day] >= 0) {
      profit += arr[day + 1] - arr[day]
    }
  })
  return profit
}

console.log(maxProfit([7, 6, 4, 3, 1]))
