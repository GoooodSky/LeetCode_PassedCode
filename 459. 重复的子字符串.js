// 字符串方法
// var repeatedSubstringPattern = function(s) {
//     for (let i = 0; i < s.length - 1; i++) {
//         var subStr = s.slice(0, i + 1)
//         if(s.length % subStr.length == 0){
//         	// console.log(subStr)
// 	        let times = s.length / subStr.length
// 	        if(subStr.repeat(times) == s)
// 	        	return true
//         }
//     }
//     return false
// };
//正则方法
var repeatedSubstringPattern = function(s) {
	var reg = /^(\w+)\1+$/
	return reg.test(s)
}
console.log(repeatedSubstringPattern("abab"))