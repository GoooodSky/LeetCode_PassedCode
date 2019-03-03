var restoreIpAddresses = function(str) {
    if (str.length > || str.length < 4) return []
    var result = []
    let search = (prev, sub) => {
        if (prev.length === 4 && prev.join('') == str) {
            result.push(prev.join('.'))
        } else {
            for (let i = 0, tmp; i < Math.min(3, sub.length); i++) {
                tmp = sub.substr(0, i + 1)
                if (tmp < 256 && !/^0(\d)+/.test(tmp)) {
                    search(prev.concat([tmp]), sub.substr(i + 1))
                }
            }
        }


    }
    search([], str)
    return result
};

console.log(restoreIpAddresses("010010"))