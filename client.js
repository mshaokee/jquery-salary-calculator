console.log('js');
$(document).ready(readyNow);

let employees = [];

function readyNow() {
    console.log('jquery running');
    //create submit inputs on click
    $('#submitBtn').on('click', submitInputs)

}//end readyNow

function submitInputs() {
    //GETTER inputs and place in OBJECT
    let inputsToSubmit = {
        firstname: $('#firstName').val(),
        lastname: $('#lastName').val(),
        idnumber: $('#idNumber').val(),
        annualsalary: $('#annualSalary').val()
    }//end inputsToSubmit variable
    //push objects into employees array
    employees.push(inputsToSubmit);
    console.log(inputsToSubmit);
    displayEmployees()
}//end submitInputs

function displayEmployees() {
    console.log('in displayEmployees', employees);
    //target employee output
    let el = $('#employeeOutputs');
    //empty employees
    el.empty();
    //loop through employees
    for (let i = 0; i < employees.length; i++) {
        //append inputs to table
        el.append(`<td> ${employees[i].firstname} </td>
                   <td> ${employees[i].lastname} </td>
                   <td> ${employees[i].idnumber} </td>
                   <td> ${employees[i].annualsalary} </td>`)
    }//end for loop

}//end displayEmployees

