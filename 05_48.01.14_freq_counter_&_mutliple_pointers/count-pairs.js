/**countPairs(numberArray, targetSum)
 *	Given an array of integers & a number,
 *		return the NUMBER OF pair(s) of integers in the array whose sum is equal to said number.
 *	Assume NO DUPLICATE VALUES in the array.
 *	Constraints: O(N) or O(Nlog(N)) Time Complexityy 
*/
function countPairs(numberArray, targetSum) {

	const numberArraySet = new Set(numberArray);
	// assume no duplicate values => one can't do 2n, for some number n that appears twice in the array = targetSum

	let pairCounts = 0;

	for(let number of numberArray){

		const caseReducedSum = targetSum - number;

		if(numberArraySet.has(caseReducedSum) && number !== caseReducedSum)	// account for when the number happens to be target/2
			pairCounts++;
		

	}

	return pairCounts/2;
		// because each time a number matches, it increments by 2 (when it is the complement's turn it also increments)

}
