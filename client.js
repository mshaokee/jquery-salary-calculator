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
}

function displayEmployees() {
    console.log('in displayEmployees', employees);

}

