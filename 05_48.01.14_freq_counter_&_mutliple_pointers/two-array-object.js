
/**	twoArrayObject(keyArray, valueArray)
 *	Return an object create from the keyArray and valueArray. Each element of the keyArray should correspond to that of a valueArray; if there are not values available, the key should have a `null` value, if there are not enough keys, the remainder of the values should be ignored.
*/
function twoArrayObject(keyArray, valueArray) {

	// let outputMap = new Map();

	// for(let i = 0; i<keyArray.length; i++){

	// 	let correspondingValue = i > valueArray.length-1 ? null : valueArray[i];

	// 	outputMap.set(keyArray[i], correspondingValue);

	// }

	// return outputMap;

	// Return an object:
	let outputObject = {};

	for(let i=0; i<keyArray.length; i++){
		let correspondingValue = i > valueArray.length-1 ? null : valueArray[i];
		outputObject[keyArray[i]] = correspondingValue;
	}

	return outputObject;

}
