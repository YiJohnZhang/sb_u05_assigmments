// assignment note: sort from min to max
function bubbleSort(inputArray) {

	for(let i=0; i < inputArray.length; i++){

		let swapMade = false;

		for(let j=1; j<inputArray.length-i; j++){

			// bubble sort guarantees the last element is sorted

			if(inputArray[j-1] > inputArray[j]){
				// [inputArray[j-1], inputArray[j]] = [inputArray[j], inputArray[j-1]];
				const temp = inputArray[j-1];
				inputArray[j-1] = inputArray[j];
				inputArray[j] = temp;
				swapMade = true;
			}

		}

		if(!swapMade)
			return inputArray;

	}

	return inputArray;

}

module.exports = bubbleSort;