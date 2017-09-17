'use strict';

( function() {

	const a = document.querySelector('#demo')
	const b = document.querySelector('#js')
	const c = document.querySelector('#_U')


	let number = [1, 2, 3, 8, 5, 9];	
	a.innerText = JSON.stringify(number);

// Using JS Sort Methods
	let list = number.sort();
	b.innerText = JSON.stringify(list);

// Using UnderScore JS Sort Methods
	let result = _.sortBy(number);
	c.innerText = JSON.stringify(result);

} ())