let step = nums => {
  let len = nums.length
  if (len < 2) {
    return 0
  }

  let getprevs = end => {
    let prev = []
    for (let i = end - 1; i >= 0; i--) {
      if (i + nums[i] >= end) {
        prev.push(i)
      }
    }
    return prev
  }

  let cache = new Array(len).fill([])

  cache[0] = [0]
  cache[1] = [0, 1]
  for (let i = 2; i < len; i++) {
    let prevs = getprevs(i)

    let minPrevlen = Number.MAX_SAFE_INTEGER
    let min = Number.MAX_SAFE_INTEGER
    prevs.map(prev => {
      if (cache[prev].length < minPrevlen) {
        minPrevlen = cache[prev].length
        min = prev
      }
    })
    cache[i] = cache[min].concat(i)
  }

  return cache.pop().length - 1
}

console.log(step([2, 3, 1, 1, 4]))
