'use strict';

(function() {

    const a = document.querySelector('#demo')
    const b = document.querySelector('#js')
    const c = document.querySelector('#_U')


    let number = [1, 2, 3, 10, 20, 30];

    a.innerText = JSON.stringify(number);

    // Using JS Min Methods

    let list = Math.min(...(number));
    b.innerText = JSON.stringify(list);

    // Using UnderScore JS Min Methods
    let result = _.min(number);
    c.innerText = JSON.stringify(result);




}())