'use strict'

;
(function() {

    const a = document.querySelector('#demo')
    const b = document.querySelector('#js')
    const c = document.querySelector('#_U')

    let number = [1, 10, 20, 30, 50]
    a.innerText = JSON.stringify(number);

    // Using JS Find Menthod

    function add(num) {
        return (num % 10 === 0) - 1;
    }

    let result = number.find(add);
    b.innerText = JSON.stringify(result);

    // Using UnderScore Find Menthod

    let result_u = _.find(number, add);
    c.innerText = JSON.stringify(result_u);

}());