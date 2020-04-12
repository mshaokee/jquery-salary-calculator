console.log('js');
$(document).ready(readyNow);

let employees = [];

function readyNow() {
    console.log('jquery running');
    //create submit inputs on click
    $('#submitBtn').on('click', submitInputs)
    $('#employeeOutputs').on('click', 'tr', 'td', deleteBtn);
}//end readyNow

function deleteBtn (){
    console.log('deleted');
    //specified in click, remove
    $(this).remove();
    //splice same item, only 1 item
    employees.splice(this, 1);
    console.log(employees);

    
}//deleteBtn

// Once the employee is deleted, update the total spend 
// on salaries account for this employee's removal.
// logic knows which element was removed. You will need to use`.text()` 
// as a getter

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
    $('#firstName').val('');
    $('#lastName').val('');
    $('#idNumber').val('');
    $('#jobTitle').val('');
    $('#annualSalary').val('');
    displayEmployees();

}//end submitInputs

function displayEmployees() {
    console.log('in displayEmployees', employees);
    //target employee output
    let el = $('#employeeOutputs');
    let monthlyTotal = 0;
    //empty employees
    el.empty();
    //loop through employees
    for (let i = 0; i < employees.length; i++) {
        //append inputs to table inside of a row
        el.append(`<tr> <td> ${employees[i].firstname} </td> 
                        <td> ${employees[i].lastname} </td>
                        <td> ${employees[i].idnumber} </td>
                        <td> ${employees[i].jobtitle} </td>
                        <td> ${employees[i].annualsalary} </td> 
                        <td> <button id="deleteBtn">Delete</button></td>
                    </tr>`)

        monthlyTotal += Number(`${employees[i].annualsalary}`) / 12;
        console.log(monthlyTotal);
        //empty inputs
        $('#totalMonthlyOutput').empty().append(monthlyTotal);
        //create if statement for RED background
        if (monthlyTotal > 20000) {
            $('#totalMonthly').addClass('red')
            console.log('too muchhhh');
        }
    
    }//end for loop
}//end displayEmployees


