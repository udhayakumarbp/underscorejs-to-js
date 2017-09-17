'use strict'
(function() {

    const a = document.querySelector('#demo')
    const b = document.querySelector('#js')
    const c = document.querySelector('#_U')


    let number = [10, 20, 30, 40, 50];
    a.innerText = JSON.stringify(number);

    // USing js Every Method
    function add(num) {

        return ((num % 20 === 0))

    }

    let result = number.every(add)
    b.innerText = JSON.stringify(result)

    // USing UnderScore Every Method
    
    let result_u = _.every(number, add)
    c.innerText = JSON.stringify(result_u)


}())