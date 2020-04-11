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
        jobtitle: $('#jobTitle').val(),
        annualsalary: $('#annualSalary').val()
    }//end inputsToSubmit variable
    //push objects into employees array
    employees.push(inputsToSubmit);
    console.log(inputsToSubmit);
    displayEmployees();
    displayTotalMonthly(); //---I THINK IMMA USE THIS TO MATCH MONTHLY TOTAL
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
                   <td> ${employees[i].jobtitle} </td>
                   <td> ${employees[i].annualsalary} </td>`)
    }//end for loop
}//end displayEmployees

function displayTotalMonthly() {
    console.log('in displayTotalMonthly');
    //create array to hold total monthly
    let monthlyTotal = [];
    //get user input
    const searchMonthly = $(employeeOutputs).val();
    console.log('searching for ', searchMonthly);
    
    //loop through employees and find their costs DIVIDE BY 4
    //display total on DOM
    //loop through total monthly array
    //append to #totalMonthly

}//end displayTotalMonthly function
