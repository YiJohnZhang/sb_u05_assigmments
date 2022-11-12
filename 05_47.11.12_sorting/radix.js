const getDigit = () => {

	return;

}

const digitCount = () => {

	return;

}

const roundlog10 = (number, power) => Math.floor(Math.log10(number, power));

// simultaneously handles an asymmetric array, i.e. [-1000, ..., 100]
const mostDigits = (inputArray) => {

	let minNegative = inputArray[0];
	let maxPositive = inputArray[0];

	for(let number of inputArray){

		console.log(maxPositive < number)
		maxPositive = maxPositive < number ? number : maxPositive;
			// for some reason both freezez up. ugh spent 38 minutes trying to debug this ._.

		// if(maxPositive < number)
		// 	maxPositive = number;

	// 	}
	// 	// minNegative is to be the minimum absolute value, therefore it can sort negatives too

	// 	if(minNegative < Math.abs(number) || minNegative === null)
	// 		minNegative = Math.abs(number);

	// 	// maxPositive = maxPositive < number || maxPositive === null ? number : maxPositive;
	// 		//doesn't work

	}

	// let negatives10Power = 0;
	// // if(minNegative !== null){
	
	// // 	while(roundlog10(minNegative, negatives10Power) > 0){

	// // 		negatives10Power++;

	// // 	}
	
	// // }

	// console.log(maxPositive)
	let positives10Power = 1;
	// console.log(roundlog10(maxPositive, positives10Power) > 0)
	// console.log(roundlog10(maxPositive, positives10Power))

	if(maxPositive !== null){
	
		while(roundlog10(maxPositive, positives10Power) > 0){

			positives10Power+=1;
			console.log(positives10Power)
			
		}
	
	}

	// console.log(negatives10Power)
	console.log(positives10Power)
		
	// // forget about minNegative for now because tests don't specify for it.
	return positives10Power;

}

// can't do input validation if there are strings; assumes numbers are integers.
function radixSort(inputArray) {

	const numberOfDigits = mostDigits(inputArray);



}

module.exports = { getDigit, digitCount, mostDigits, radixSort };