'use strict';
(function() {
    const a = document.querySelector('#demo')
    const e = document.querySelector('#input');
    const b = document.querySelector('#js')
    const c = document.querySelector('#invoke')
    const d = document.querySelector('#_U')

    const employeesIBM = ['prakash', 'ravi', 'raju'];
    const employeesHCL = ['murali', 'magesh', 'madhu'];
    a.innerText = JSON.stringify(employeesHCL);
    e.innerText = JSON.stringify(employeesIBM);

    // Using UnderScore JS Invoke Methods

    const list = [employeesHCL, employeesIBM];
    const result_U = _.invoke(list, 'sort');
    b.innerText = JSON.stringify(result_U);

    // Using  JS Sort Methods

    const result_N = list.sort();
    d.innerText = JSON.stringify(result_N);

}())