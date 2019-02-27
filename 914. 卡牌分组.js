var hasGroupsSizeX = function(deck) {
	function gcd(a, b) {
		if(b == 0) return a
		var r = a % b
		return gcd(b, r)
	}

	if(!deck instanceof Array){
		return false
	}
	if(deck.length <= 1 || deck.length > 10000){
		return false
	}
	deck.sort((a, b) => a - b) 
	var group = []
	var pointer = 0
	var start = deck[0]
	var repeat = 0
	deck.forEach(num => {
		if(num == start){
			group[pointer] = num.toString().repeat(++repeat)
		}else{
			repeat = 0
			start = num
			group[++pointer] = num.toString().repeat(++repeat)
		}
	})

	var groupLen = group.map(e => e.length).sort((a, b) => a - b)
	if(groupLen[0] == 1){
		return false
	}

	var t = 0
	for(i = 1;i < groupLen.length;i++){
		if(groupLen[i] == groupLen[0] || gcd(groupLen[i], groupLen[0])!= 1){
			t++
		}
	}
	if(t == groupLen.length - 1){
		return true
	}
	else return false
};