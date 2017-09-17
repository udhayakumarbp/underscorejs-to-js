'use strict';
(function() {

    const a = document.querySelector('#demo')
    const b = document.querySelector('#js')
    const c = document.querySelector('#_U')


    let number = [1, 2, 3, 4, 5];
    a.innerText = JSON.stringify(number);


 // USing js Contains Method
    
    let result = number.indexOf(4) != -1;
    b.innerText = JSON.stringify(result);

 // USing UnderScore Contains Method

   let result_u = _.contains(number, 4)
    c.innerText = JSON.stringify(result_u)


}());