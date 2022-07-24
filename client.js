// # Weekend Challenge: jQuery Salary Calculator
// Create an application that records employee salaries and adds salaries up to report monthly costs. 

// ## Topics Covered
// - JavaScript
// - jQuery - Selectors, append, and event handling

// ## Assignment

// The application should have an input form that collects _employee first name, last name, ID number, job title, annual salary_.

// A 'Submit' button should collect the form information, store the information to calculate monthly costs, append information to the DOM and clear the input fields. Using the stored information, calculate monthly costs and append this to the to DOM. If the total monthly cost exceeds $20,000, add a red background color to the total monthly cost.

// Create a delete button that removes an employee from the DOM. For Base mode, it does **not** need to remove that Employee's salary from the reported total.

// ### Files Provided
// No files have been provided (just instructions.md and a readme.md). Instead of forking and cloning this repo, please choose "Use This Template" (green button) and name your new repo "weekend-jquery-salary-calculator" and clone down from there. Make sure to commit regularily!


console.log('client.js loaded')

$(document).ready(handleReady);

function handleReady(){
    console.log('document ready!');
    //DOM = document Object Model
    //the dom is ready! We can interact with it
    let employees = [];
  
    //click handler
    //%('exists_now).on('click',exists_later, handleClickFn)
    $('#submitBtn').on('click', addEmployee);
    //$(document).on('click', '#removeBtn', removeEmployee);

function addEmployee() {

    let firstName = $('#firstName').val();
    let lastName = $('#lastName').val();
    let employeeId = $('#employeeId').val();
    let jobTitle = $('#jobTitle').val();
    let annualSalary = Math.round($('#annualSalary').val());

    let newEmployee = {
        firstName: firstName,
        lastName: lastName,
        employeeId: employeeId,
        jobTitle: jobTitle,
        annualSalary: annualSalary
        }

    {employees.push(newEmployee);
        console.log(employees);
    }
    console.log(employees);
}

}