var reverseWords = function(s) {
    return s.split(' ').map(function (e) {
	    return [...e].reverse().join('')
    }).join(' ')
};