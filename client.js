// # Weekend Challenge: jQuery Salary Calculator
// Create an application that records employee salaries and adds salaries up to report monthly costs. 

// ## Topics Covered
// - JavaScript
// - jQuery - Selectors, append, and event handling

// ## Assignment

// The application should have an input form that collects _employee first name, last name, ID number, job title, annual salary_.

// ### Files Provided
// No files have been provided (just instructions.md and a readme.md). Instead of forking and cloning this repo, please choose "Use This Template" (green button) and name your new repo "weekend-jquery-salary-calculator" and clone down from there. Make sure to commit regularily!


$(readyNow)

function readyNow() {
    console.log('doc is ready')
    $('#submitBtn').on('click', submit);


    $('#container').on('click', '.delete', deleteBtn)
    $('#submitBtn').on('click',submit);
    
}

let total = 0;

// A 'Submit' button should collect the form information, store the information to calculate monthly costs, append information to the DOM and clear the input fields. Using the stored information, calculate monthly costs and append this to the to DOM. 
function submit() {

    let first = $('#firstName').val();
    let last = $('#lastName').val();
    let ID = $('#userId').val();
    let job = $('#jobTitle').val();
    let salary = $('#annualSalary').val();
    console.log(typeof(salary))
    total += Math.round(Number(salary / 12) * 100) / 100;
    console.log(total)

    console.log('clicked')
    if (first && last && ID && job && salary) {
        $('#container').append(`
            <tr>
                <td>${first}</td>
                <td>${last}</td>
                <td>${ID}</td>
                <td>${job}</td>
                <td>${salary}</td>
                <td><button class="delete">remove</button></td>
            </tr>
        `)
        $('#firstName').val('');
        $('#lastName').val('');
        $('#userId').val('');
        $('#jobTitle').val('');
        $('#annualSalary').val('');
        
        $('#monthly').empty()
        $('#monthly').append(`Total Monthly Costs: <span id="red">$${total}</span>`)
        $('#alert').empty()
        if (total >= 20000) {
            $('#red').addClass("red")
        }
    } else {
        //Empty box alert
        $('#alert').empty()
        $('#alert').append('Error 9000: Im sorry, Dave. Im afraid I cant do that. A text box was left empty')
    }
}
// Create a delete button that removes an employee from the DOM. For Base mode, it does **not** need to remove that Employee's salary from the reported total.
function deleteBtn() {
    $(this).closest('tr').remove();

}
