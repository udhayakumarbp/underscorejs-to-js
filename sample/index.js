'use strict';

(function() {

    const a = document.querySelector('#demo');
    const b = document.querySelector('#js');
    const c = document.querySelector('#_U');


    let number = [1, 2, 3, 4, 5, 6, ];
    a.innerText = JSON.stringify(number);

    // Using js Random Methods

    function add(num) {
        return Math.floor(Math.random() * number.length)
    }
    let result = number.map(add);
    let list = result.slice(0, 5)
    b.innerText = JSON.stringify(result);

    // Using UnderScore JS Sample Methods

    let result_u = _.sample(number, 5);
    c.innerText = JSON.stringify(result_u);





}())