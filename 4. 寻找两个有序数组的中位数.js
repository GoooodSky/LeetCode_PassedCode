var findMedianSortedArrays = function(nums1, nums2) {
var c =  [...nums1,...nums2].sort(function(a,b){
	if(a>b)
		return 1
	else
		return -1
})

var len = c.length

if(len%2 == 0){
	//odd
	return((c[len/2] + c[len/2-1])/2)
}
else{
	//even
	return(c[Math.floor(len/2)])
}
};