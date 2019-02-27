canPlaceFlowers = function(flowerbed, n) {
	//判断是否有1即是否种植
	if([...new Set(flowerbed)].toString() == [0]){
		return Math.ceil(flowerbed.length / 2) >= n
	}

    var groupLen = flowerbed.join('').split("1").map(e => e.length)

    var tmp = 0

    for(let i = 1; i < groupLen.length - 1; i++){
    	if(groupLen[i] > 2){
    		tmp += Math.ceil(groupLen[i] / 4)
    	}
    }

    tmp += Math.floor(groupLen[0] / 2) + Math.floor(groupLen[groupLen.length - 1] / 2)
    if(tmp >= n) return true
    else return false
};

console.log(canPlaceFlowers([1,0,0,0,0,1], 2))


