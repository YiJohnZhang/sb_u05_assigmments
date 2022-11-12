function createAccount(pin, balance) {

	balance = Number(balance) || 0;
		// initialize balance to prevent it from being NaN

	return {

		errorInvalidPin(){
			return 'Invalid PIN.';
		},

		errorInvalidAmount(){
			return 'Enter a positive amount.';
		},

		checkBalance(inputPin){

			if(inputPin != pin)
				return this.errorInvalidPin();
			
			return `$${balance}`

		},

		deposit(inputPin, amount){

			if(inputPin !== pin)
				return this.errorInvalidPin();

			if(amount < 0)
				return this.errorInvalidAmount();

			balance = balance + amount;
			return `Successfully deposited $${amount}. Current balance: $${balance}.`

		},

		withdraw(inputPin, amount){

			if(inputPin !== pin)
				return this.errorInvalidPin();

			if(amount < 0)
				return this.errorInvalidAmount();
			
			if(amount > balance)
				return 'Withdrawal amount exceeds account balance. Transaction cancelled.';

			balance = balance - amount;
				return `Successfully withdrew $${amount}. Current balance: $${balance}.`

		},

		changePin(currentPin, newPin){

			if(currentPin !== pin)
				return this.errorInvalidPin();

			pin = newPin;
			return 'PIN successfully changed!';

		}

	}

}

module.exports = { createAccount };
