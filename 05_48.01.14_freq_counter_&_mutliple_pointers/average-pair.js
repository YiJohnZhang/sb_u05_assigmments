// add whatever parameters you deem necessary

const calculateAverage = (leftValue, rightValue) => (leftValue+rightValue)/2;

/**	averagePair(numberArray, average)
 * 	Takes an input SORTED array and a target average; determines if there exists a pair of values that equals the target average
*/
function averagePair(numberArray, average) {

	// assume: SORTED numerical array
	// Constraint: O(N) time complexity

	function _averagePair(leftIndex = 0, rightIndex = numberArray.length-1){

		if(leftIndex > rightIndex)
			return false;
		
		const leftValue = numberArray[leftIndex];
		const rightValue = numberArray[rightIndex];
		
		if(calculateAverage(leftValue, rightValue) === average)
			return true;

		if(calculateAverage(leftValue, rightValue) < average){
			return _averagePair(leftIndex+1, rightIndex);
		}else{
			return _averagePair(leftIndex, rightIndex-1);
		}

	}

	return _averagePair();


}
