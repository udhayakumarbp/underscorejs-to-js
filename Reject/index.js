'use strict'

(function() {

    const a = document.querySelector('#demo')
    const b = document.querySelector('#js')
    const c = document.querySelector('#_U')

    let number = [1, 10, 20, 30, 50]
    a.innerText = JSON.stringify(number);


    function add(num) {
        return (num % 30 === 0);
    }
    // Using JS Filter Menthod
    function add1(num) {
        return ((num % 30 === 0) - 1);
    }

    let result = number.filter(add1);
    b.innerText = JSON.stringify(result);

    // Using UnderScore Reject Menthod
    let result_u = _.reject(number, add);
    c.innerText = JSON.stringify(result_u);

}())