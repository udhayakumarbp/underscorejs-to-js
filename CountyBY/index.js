'use strict';

(function() {

    const a = document.querySelector('#demo')
    const b = document.querySelector('#js')
    const c = document.querySelector('#_U')


    let number = [1, 2, 3, 8, 5, 9];

    a.innerText = JSON.stringify(number);

    // Using JS Push Method
    let list = { even: [], odd: [] };
    number.forEach(function(val) {
        let key = (val % 2 === 0) ? 'even' : 'odd';
        list[key].push(val);
    });
    let result = { even: list.even.length, odd: list.odd.length };
    b.innerText = JSON.stringify(list);

    // Using UnderScore JS CountBY Methods
    let result_u = _.countBy(number, function(num) {
        return num % 2 == 0 ? 'even' : 'odd';
    });
    c.innerText = JSON.stringify(result_u);




}())