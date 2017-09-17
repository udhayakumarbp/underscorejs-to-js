'use strict';

(function() {

    const a = document.querySelector('#demo');
    const b = document.querySelector('#js');
    const c = document.querySelector('#_U');


    let number = [1, 2, 3, 4, 5, 6, ];
    a.innerText = JSON.stringify(number);

    // Using js Random Methods
    function add(num) {
        return Math.floor(Math.random() * number.length + 1)
    }
    let result = number.map(add);
    b.innerText = JSON.stringify(result);

    // Using UnderScore JS shuffle Methods
    let result_u = _.shuffle(number);
    c.innerText = JSON.stringify(result_u);





}())