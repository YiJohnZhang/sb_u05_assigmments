
/**	separatePositive(integerArray)
 *	for an input array of non-zero integers, migrate positive values to the LEFT and negative values to the RIGHT.
 *	Return the array.
 *	Constraints: done in place, O(N) time complexity 
*/
function separatePositive(integerArray) {

	let leftIndex = 0;
	let rightIndex = integerArray.length - 1;

	while(leftIndex < rightIndex){

		if(integerArray[leftIndex] > 0)
			leftIndex++;
		
		if(integerArray[rightIndex] < 0)
			rightIndex--;
		
		// if(integerArray[leftIndex] > 0 && integerArray[rightIndex] < 0)
		// 	[integerArray[leftIndex], integerArray[rightIndex]] = [integerArray[rightIndex], integerArray[leftIndex]]

		if(integerArray[leftIndex] < 0 && integerArray[rightIndex] > 0){

			let temp = integerArray[rightIndex];
			integerArray[rightIndex] = integerArray[leftIndex];
			integerArray[leftIndex] = temp;

			leftIndex++;
			rightIndex--;

		}

	}

	return integerArray;

}
