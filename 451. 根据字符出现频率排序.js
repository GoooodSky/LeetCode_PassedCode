var frequencySort = function(str) {
  let map = new Map()
  let result = ''
  str.split('').forEach(item => {
    if (map.has(item)) {
      map.set(item, map.get(item) + 1)
    } else {
      map.set(item, 1)
    }
  })
  map = [...map]
    .sort((a, b) => b[1] - a[1])
    .map(item => {
      result += item[0].repeat(item[1])
    })
  return result
}

console.log(frequencySort('tree'))
