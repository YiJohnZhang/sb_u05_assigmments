// currying functions is new to me
	// https://blog.logrocket.com/understanding-javascript-currying/

// function curriedAdd(total) {

// 	total = Number(total) || 0;

// 	return (function curriedAdd(x=0){

// 		total = x+total;
// 		console.log(total);

// 		return total;

// 	});

// }

// const curriedAdd = ((total) => {

// 	total = Number(total) || 0;

// 	total = total + total;

// 	return total;

// })();

function curriedAdd(total) {

	if(total === undefined)
		return 0;
	
	total = Number(total) || 0;

	return function add(nextNumber){

		if(nextNumber === undefined)
			return total;
		
		total = total + nextNumber;
		return add;

	}

}

module.exports = { curriedAdd };
