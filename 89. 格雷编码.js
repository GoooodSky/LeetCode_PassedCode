var grayCode = function(n) {
    let binary = (n) => {
        if (n == 0) {
            return ["0"]
        }
        if (n == 1) {
            return ["0", "1"]
        } else {
            let prev = binary(n - 1)
            let result = []
            let max = Math.pow(2, n) - 1
            for (let i = 0; i < prev.length; i++) {
                result[i] = `0${prev[i]}`
                result[max - i] = `1${prev[i]}`
            }
            return result
        }
    }
    return binary(n).map(code => {
    	// let gcode = 0
    	// for(let i = 0; i < code.length; i++){
    	// 	gcode += Math.pow(2,code.length - 1 - i) * code[i]
    	// }
    	return parseInt(code, 2)
    })
};

console.log(grayCode(3))