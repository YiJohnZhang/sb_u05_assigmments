const frequencyMap = (stringifiedNumber) => {

	let numberFrequencyMap = new Map();

	for(character of stringifiedNumber){
		const getCharacterFrequency = numberFrequencyMap.get(character);
		numberFrequencyMap.set(character, getCharacterFrequency ? getCharacterFrequency + 1 : 1)
	}

	return numberFrequencyMap;

}

/**	sameFrequency(numberOne, numberTwo)
 *	Given two numbers, Determine if two numbers have the same frequency of digits.
 *	Time Complexity - O(N + M)
*/
function sameFrequency(numberOne, numberTwo) {

	const WEARENUMBERONE = frequencyMap(String(numberOne));
	const numberTwoFrequencyMap = frequencyMap(String(numberTwo));

	for(let numberKey of WEARENUMBERONE.keys())
		if(WEARENUMBERONE.get(numberKey) != numberTwoFrequencyMap.get(numberKey))
			return false;
	
	return true;

}
