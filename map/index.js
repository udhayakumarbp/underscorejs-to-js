'use strict'
(function() {
    const a = document.querySelector('#demo');
    const b = document.querySelector('#js');
    const c = document.querySelector('#_U');

    var num = [1, 2, 3, 4];
    a.innerText = JSON.stringify(num);
    
// Using JS Map Methods
    function add(x) {
        return x * 2;

    }

    var result = num.map(add)
    b.innerText = JSON.stringify(result);

// Using UnderScore JS Map Methods

    var result_u = _.map(num, add)
    c.innerText = JSON.stringify(result_u);

}());