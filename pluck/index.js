'use strict';
(function() {

    const a = document.querySelector('#demo');
    const e = document.querySelector('#pluck');
    const b = document.querySelector('#js');
    const c = document.querySelector('#_U');


    const employeesTCS = { name: 'prakash', age: 40 };
    const employeesHCL = { name: 'naresh', age: 30 };
    a.innerText = JSON.stringify(employeesTCS);
    e.innerText = JSON.stringify(employeesHCL);

    // Using JS Pluck Methods JS
    
    let list1 = employeesTCS.name;
    let list2 = employeesHCL.name;
    let list = [list1 , list2]
    b.innerText = JSON.stringify(list);

    // Using UnderScore Pluck Methods
    let employees = [employeesTCS, employeesHCL]
    let result = _.pluck(employees, 'name');
    c.innerText = JSON.stringify(result);





}())