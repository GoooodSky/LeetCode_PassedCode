var letterCombinations = function(digits) {
  if (digits == '') {
    return []
  }
  var map = ['', 1, 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz']
  var code = digits.split('').map(e => map[e])
  function combine(arr) {
    if (arr.length == 1) {
      return arr[0].split('')
    }
    let result = []
    for (let n of arr[0]) {
      for (let m of arr[1]) {
        result.push(n + m)
      }
    }
    arr.splice(0, 2, result)
    if (arr.length > 1) {
      combine(arr)
    } else {
      return result
    }
    return arr[0]
  }
  return combine(code)
}

console.log(letterCombinations('234'))
