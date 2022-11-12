function merge(sortedArray1, sortedArray2) {

	let mergedArray = [];

	if(typeof sortedArray1 === 'number' && typeof sortedArray2 === 'number')
		return sortedArray1 < sortedArray2 ? new Array(sortedArray1, sortedArray2) : new Array(sortedArray2, sortedArray1);
		// handle my trollish I am not splitting up the array implementation.
	
	if(sortedArray1 === undefined && sortedArray2 === undefined)
		return;

	if(sortedArray2 === undefined || sortedArray2[0] === undefined)
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
	
	// maybe mergeSort(input[0:mid]); basically make a call tree?

	// let splitArray = [];

	// function _mergeSplit(inputArray){

	// 	if (inputArray.length < 2)
	// 		splitArray.push()

	// }
	// const middleCeiling = Math.ceil(inputArray.length/2);
	// 	// because if it is a one-element array, the first array will be undefined; ceil guarantees the second array to be undefined for my implementation of `merge()`

	// return mergeSort(inputArray.slice(0, middleCeiling)

	// do I really need to go through the "splitting" formality? why not just merge each index?

	let splitArray = [];

	for(let i=0; i < inputArray.length; i+=2){
	// for(let i=0; i<Math.ceil(inputArray.length/2); i++){

		splitArray.push(merge(inputArray[i], inputArray[i+1]));

	}
	console.log(splitArray);

	function _mergeArray(){

		if(splitArray.length === 1)
			return splitArray;

		let tempSplitArray = [];
		
		for(let i=0; i<splitArray.length; i+=2)
			tempSplitArray.push(merge(splitArray[i], splitArray[i+1]));
		// for(let i=0; i<Math.ceil(splitArray.length/2); i++)
			// later: integrate the above code somehow into this block.
		
		splitArray = tempSplitArray;

		return _mergeArray();

	}

	_mergeArray();
	console.log(splitArray);

	return splitArray[0];

	// I think there is some space complexity improvement: I instead have O(max(log(N)-1, 1)) array creations instead of O(log(N)) by avoiding the first fragment.

}

module.exports = { merge, mergeSort };