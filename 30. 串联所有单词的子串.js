var findSubstring = function(s, arr) {
    let result = []

    let search = (prev, words) => {
        if (prev.length === arr.length) {
            result.push(prev)
        } else {
            words.forEach((item, index) => {
                let tmp = [...words]
                tmp.splice(index, 1)
                search(prev.concat(item), tmp)
            })
        }

    }
    search([], arr)
    let r = []
    result.forEach(e => {
        let str = e.join('')
        if(str == '') return
        let pos = 0
        while (pos < s.length) {
            pos = s.indexOf(str, pos)
            if (pos === -1) return
            r.push(pos)
            pos += 1
        }
    })
    return [...new Set(r.sort())]
};

console.log(findSubstring("a", []))