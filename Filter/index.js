'use strict'

(function (){

	const a = document.querySelector('#demo')
	const b = document.querySelector('#js')
	const c = document.querySelector('#_U')

	let number = [1, 10, 20, 30,50]
	a.innerText = JSON.stringify(number);

// Using JS Filter Menthod
	function add(num){
		return  ((num % 30 === 0)-1);
	}

	let result = number.filter(add);
	b.innerText = JSON.stringify(result);

// Using UnderScore Filter Menthod
	let result_u = _.filter(number, add);
	c.innerText = JSON.stringify(result_u);







} ())