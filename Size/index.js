'use strict';

(function() {

    const a = document.querySelector('#demo');
    const b = document.querySelector('#js');
    const c = document.querySelector('#_U');


    let number = [1, 2, 3, 4, 5, 6 ];
    
    a.innerText = JSON.stringify(number);

    // Using js Split Methods

    let result = number.length
    b.innerText = JSON.stringify(result);

    // Using UnderScore JS ToArray Methods

    let result_u = _.size(number)
    c.innerText = JSON.stringify(result_u);


}())