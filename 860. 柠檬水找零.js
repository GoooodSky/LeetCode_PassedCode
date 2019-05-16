var lemonadeChange = function(bills) {
  let five = 0
  let ten = 0
  let result = bills.map(bill => {
    if (bill == 5) {
      five++
    } else if (bill == 10) {
      five--
      ten++
    } else if (bill == 20) {
      if (five >= 3 && ten < 1) {
        five -= 3
      } else {
        five--
        ten--
      }
    }
    if (five < 0 || ten < 0) {
      return false
    } else {
      return true
    }
  })
  return !result.some(item => item == false)
}

// console.log(lemonadeChange([10, 10]))
console.log(lemonadeChange([5, 5, 20, 5, 5, 10, 5, 10, 5, 20]))

var lemonadeChange = function(bills) {
  let five = 0
  let ten = 0
  for (let i = 0; i < bills.length; i++) {
    if (bills[i] == 5) {
      five++
    } else if (bills[i] == 10) {
      five--
      ten++
    } else if (bills[i] == 20) {
      if (five >= 3 && ten < 1) {
        five -= 3
      } else {
        five--
        ten--
      }
    }
    if (five < 0 || ten < 0) {
      return false
      break
    }
    return true
  }
}

console.log(lemonadeChange([5, 5, 20, 5, 5, 10, 5, 10, 5, 20]))
