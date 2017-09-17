'use strict';

(function () {

	const a = document.querySelector('#demo')
	const b = document.querySelector('#js')
	const c = document.querySelector('#_U')


	let number = [1, 2, 3, 4, 5];
	a.innerText = JSON.stringify(number);

// Using UnderScore JS Some Methods
	let result = _.some(number,null, 5, 'yes', false);
	c.innerText = JSON.stringify(result);
 	
	
} () )