'use strict'
(function() {
    const a = document.querySelector('#demo');
    const b = document.querySelector('#js');
    const c = document.querySelector('#_U');


    var numbers = [1, 2, 3, 4, 5]
    a.innerText = JSON.stringify(numbers);

    // Using Underscore JS Reduce Methods
    function add(total, num) {
        return total + num;
    }

    var result_U = _.reduce(numbers, add);
    b.innerText = JSON.stringify(result_U);

    // Using JS Reduce Methods
    var result_N = numbers.reduce(add);
    c.innerText = JSON.stringify(result_N);

}());