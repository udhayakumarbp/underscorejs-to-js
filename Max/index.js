'use strict';

( function() {

	const a = document.querySelector('#demo')
	const b = document.querySelector('#js')
	const c = document.querySelector('#_U')


	let number = [1, 2, 3, 10, 20, 30];
	
	a.innerText = JSON.stringify(number);

// Using JS MAx Methods
	let list = Math.max(...(number));
	b.innerText = JSON.stringify(list);
	
// Using UnderScore JS MAx Methods
	let result = _.max(number);
	c.innerText = JSON.stringify(result);




} ())