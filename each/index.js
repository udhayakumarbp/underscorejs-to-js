'use strict'
(function() {
    const a = document.querySelector('#demo');
    const b = document.querySelector('#js');
    const c = document.querySelector('#_U');

    var name = ["udhaya", "babu", "muni", "sasi"]
    a.innerText = JSON.stringify(name);

    // Using Javascript
    var result_u = name.forEach(alert);
    b.innerText = JSON.stringify(result_u);

    // using Underscore js
    var result = _.each(name, alert);
    c.innerText = JSON.stringify(result);


}());