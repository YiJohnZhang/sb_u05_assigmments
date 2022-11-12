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

const curriedAdd = ((total) => {

	total = Number(total) || 0;

	total = total + total;

	return total;

})();

module.exports = { curriedAdd };
