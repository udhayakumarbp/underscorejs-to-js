'use strict'

(function() {

    const a = document.querySelector('#demo');
    const b = document.querySelector('#js');
    const c = document.querySelector('#concat');
    const d = document.querySelector('#_U');


    var boys = ['Siva', 'Madhu', 'Anil'];
    var girls = ['Vani', 'Deepa', 'Banu'];
    a.innerText = JSON.stringify(boys);
    c.innerText = JSON.stringify(girls);

    // Using JS Concat Methods
    function add(a, b) {
        return b.concat(a)
    }

    var result = boys.concat(girls)
    b.innerText = JSON.stringify(result);
    // Using UnderScore JS ReduceRight

    var list = girls + boys;

    var result_u = _.reduceRight(list, add);
    d.innerText = JSON.stringify(result_u);



}())