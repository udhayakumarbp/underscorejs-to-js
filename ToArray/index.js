'use strict';

(function() {

    const a = document.querySelector('#demo');
    const b = document.querySelector('#js');
    const c = document.querySelector('#_U');


    let number = [1, 2, 3, 4, 5, 6 ];
    let num = number.toString()
    a.innerText = JSON.stringify(num);

    // Using js Split Methods

    let result = num.split()
    b.innerText = JSON.stringify(result);

    // Using UnderScore JS ToArray Methods

    let result_u = (function(){ return _.toArray(arguments).slice(); })(num);
    c.innerText = JSON.stringify(result_u);





}())