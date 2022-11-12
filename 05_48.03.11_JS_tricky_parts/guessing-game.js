function guessingGame() {

	const correctNumber = Math.floor(100*Math.random());
	let guesses = 0;
	let gameOver = false;

	return function guess(x){

		// console.log(correctNumber);

		guesses = guesses + 1;

		if(gameOver)
			return 'The game is over, you already won!';

		if(x === correctNumber){
			gameOver = true;
			return `You win! You found ${x} in ${guesses} guesses.`
		}else if(x < correctNumber){
			return `${x} is too low!`
		}else{
			return `${x} is too high!`
		}

	}

}

module.exports = { guessingGame };
