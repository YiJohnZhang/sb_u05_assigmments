/** product: calculate the product of an array of numbers. */

function product(nums) {

	function _helperProduct(index = 0){

		if(index === nums.length)
			return 1;

		return nums[index] * _helperProduct(index+1);

	}

	return _helperProduct();

}

/** longest: return the length of the longest word in an array of words. */

function longest(words) {

	let longest = 0;

	function _helperLongest(index = 0){

		if(index === words.length)
			return;

		if(words[index].length > longest)
			longest = words[index].length;

		return _helperLongest(index + 1);

	}

	_helperLongest();

	return longest;

}

/** everyOther: return a string with every other letter. */

function everyOther(str) {

	function _helperEveryOther(index = 0){

		if(index === str.length)
			return '';
		
		if(index%2 === 0){
			return str.charAt(index).concat(_helperEveryOther(index + 1));
		}else{
			return ''.concat(_helperEveryOther(index + 1));
		}

	}

	return _helperEveryOther();

}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str) {

	function _helperIsPalindrome(index = 0){

		if(index*2+1 >= str.length)
			return true;

		if(str.charAt(index) != str.charAt(str.length-1-index))
			return false;

		return true || _helperIsPalindrome(index + 1);

	}

	return _helperIsPalindrome();

}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val) {

	function _findIndex(index=0){

		if(arr[index] === val)
			return index;

		if(index === arr.length)
			return -1;
		
		return _findIndex(index+1);

	}

	return _findIndex();

}

/** revString: return a copy of a string, but in reverse. */

function revString(str) {

	function _reverseString(index=0){

		if(index === str.length)
			return '';
		
		return ''.concat(_reverseString(index+1), str[index]);
		
	}

	return _reverseString()

}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {

	let stringValues = [];

	function _gatherStrings(objectValues=Object.values(obj), index=0){

		if(index === objectValues.length)
			return;

		if(typeof objectValues[index] === 'object')
			_gatherStrings(Object.values(objectValues[index]), 0);
			// _gatherStrings(Object.values(objectValues[index]), index=0); < this ain't python, don't do `index=...`
		
		if(typeof objectValues[index] === 'string')
			stringValues.push(objectValues[index]);
		
		_gatherStrings(objectValues, index+1);

	}

	_gatherStrings();

	return stringValues;

}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val) {
	
	const floorMiddleIndex = (leftIndex, rightIndex) => Math.floor((leftIndex+rightIndex)/2);

	function _binarySearch(leftIndex = 0, rightIndex = arr.length-1){

		if(leftIndex > rightIndex)
			return -1;
		
		middleIndex = floorMiddleIndex(leftIndex, rightIndex)
		middleValue = arr[middleIndex];

		if(middleValue === val){
			return middleIndex;
		}else if(middleValue < val){
			leftIndex = middleIndex + 1;
		}else{
			rightIndex = middleIndex - 1;
		}

		return _binarySearch(leftIndex, rightIndex)

	}

	return _binarySearch();

}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
