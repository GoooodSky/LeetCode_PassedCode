// let matrix = [[7], [9], [6]]
// let matrix = [[1], [2], [3], [4], [5], [6], [7], [8], [9], [10]]
let matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
let spiralOrder = function(arr) {
  let map = (arr, result = []) => {
    let row = arr.length
    let left = []
    for (let i = 0; i < row; i++) {
      if (i === 0) {
        result.push(...arr[i])
      } else if (i == row - 1) {
        result.push(...arr[i].reverse())
      } else {
        result.push(arr[i].pop())
        if (arr[i][0]) {
          left.unshift(arr[i].shift())
        }
      }
      // console.dir({ result, arr })
      // console.log('-----')
    }
    arr.pop()
    arr.shift()
    result.push(...left)
    // console.log(arr.some(e => e !== []))
    if (arr.some(e => e.length > 0)) {
      map(arr, result)
    }
    return result
  }
  return map(arr, [])
}

console.log(spiralOrder(matrix))
