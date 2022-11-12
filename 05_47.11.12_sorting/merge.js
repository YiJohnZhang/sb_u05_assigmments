function merge(sortedArray1, sortedArray2) {

	let mergedArray = [];

	if(sortedArray2[0] === undefined)
		return sortedArray1;

	function _merge(i = 0, j = 0){
		// i is index for sortedArray1, j is index for sortedArray2

		if(i === sortedArray1.length && j === sortedArray2.length)
			return;

		if(sortedArray1[i] <= sortedArray2[j] || j === sortedArray2.length){
			//sortedArray1 element takes priority if duplicate values

			mergedArray.push(sortedArray1[i]);
			_merge(i+1, j);

		}else{

			mergedArray.push(sortedArray2[j]);
			_merge(i, j+1);

		}
	
	}

	_merge();

	return mergedArray;

}

function mergeSort(inputArray) {

	// so I'm guessing the "breaking up" array is a recursive call stack?

	// if(inputArray.length < 2)
	// 	return merge(inputArray.slice(0, 1), inputArray.slice(1));
	
	// return mergeSort(inputArray.slice(0, Math.floor((inputArray.length-1)/2)));

	// idea: mergeSort([2, 5, 1, 0, 3, 4]) => ???? => mergeSort([2], [5]), mergeSort([1], [0]), mergeSort([3], [4]) => merge([2,5], [0,1]), merge([3,4], undefined) => merge([0,1,2,5], [3,4])
		//	base case: when the input array has length of 1.
		//	however, the function only takes 1 parameter...

	// do i have to simultaneously break up the or can I do bite-sized chunks i.e. sort[2, 5] = [2,5] then sort [1,0] = [0, 1] then merge [0, 1, 2, 5]?
	


}

module.exports = { merge, mergeSort};