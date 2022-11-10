/**	isSubsequence(substring, stringSequence)
 *	Retruns if the second string contains all the needed characters in the order provided by the first string.
 *	Constraint: O(N + M) Time Complexity
*/

function isSubsequence(substring, stringSequence) {
	// iteration because position matters

	if(substring.length > stringSequence.length)
		return false;

	function _isSubsequence(substringIndex = 0, stringSequenceIndex = 0){

		if(substringIndex === substring.length)
			return true;	// the substring is exhausted

		if(stringSequenceIndex === stringSequence.length)
			return false;

		if(substring.charAt(substringIndex) === stringSequence.charAt(stringSequenceIndex)){
			return _isSubsequence(substringIndex + 1, stringSequenceIndex + 1) && true;
		}else{
			return _isSubsequence(substringIndex, stringSequenceIndex + 1) && true;
		}

	}

	return _isSubsequence();
		// i think this is O(Math.max(M, N)) = O(N) that of the substring runtime instead of O(M+N) =)

}
