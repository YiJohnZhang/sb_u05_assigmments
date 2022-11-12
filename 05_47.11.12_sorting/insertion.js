function insertionSort(inputArray) {

	for(let i = 1; i < inputArray.length; i++){

		for(let j = i; j > 0; j--){

			if(inputArray[j] < inputArray[j-1])
				[inputArray[j], inputArray[j-1]] = [inputArray[j-1], inputArray[j]];
			
			// optimization to terminate because what was at [j] is now at [j-1]
			if(inputArray[j-1] > inputArray[j-2])
				break;

		}
		// console.log(`${i}: ${inputArray}`)
	}

	return inputArray;

}

module.exports = insertionSort;