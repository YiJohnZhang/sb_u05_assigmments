const frequencyMapper = (inputString) => {

	let characterFrequencyMap = new Map();

	for(let character of inputString){

		const currentCount = characterFrequencyMap.get(character);
		characterFrequencyMap.set(character, currentCount ? currentCount + 1 : 1);
	
	}

	return characterFrequencyMap;

}

// add whatever parameters you deem necessary
/**	constructNote(message, letters)
 *	returns true if the message can be constructed with the given letters; false otherwise
 */
function constructNote(message, letters) {

	//	"Assume only lowercase letters and no space or special characters"
	//	Constraint: O(M+N);

	const messageFrequencyMap = frequencyMapper(message);
	const letterFrequencyMap = frequencyMapper(letters);

	for(let character of messageFrequencyMap.keys()){

		if(!letterFrequencyMap.get(character) || messageFrequencyMap.get(character) > letterFrequencyMap.get(character))
			return false;
			
	}

	return true;

}
