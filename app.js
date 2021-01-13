const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

// Variable to store employee information
const employeeInfo = [];

// Command-line functions to prompt the user with questions that retrieve information about the manager, intern, engineer, and employee.
const getManagerInfo = () => {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is your manager's name?",
        name: "managerName",
      },
      {
        type: "input",
        message: "What is your manager's ID?",
        name: "managerID",
      },
      {
        type: "input",
        message: "What is your manager's email?",
        name: "managerEmail",
      },
      {
        type: "input",
        message: "What is your manager's office number?",
        name: "managerOfficeNumber",
      },
      {
        type: "list",
        message: "Would you like to add a new member to your team?",
        name: "addNewMember",
        choices: ["Employee", "Engineer", "Intern", "No new members"],
      },
    ])
    .then((response) => {
      employeeInfo.push(response);
      if (response.addNewMember === "Employee") {
        getEmployeeInfo();
      } else if (response.addNewMember === "Engineer") {
        getEngineerInfo();
      } else if (response.addNewMember === "Intern") {
        getInternInfo();
      } else {
        console.log("Your team members have been added!");
      }
    });
};

const getEmployeeInfo = () => {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is your employee's name?",
        name: "employeeName",
      },
      {
        type: "input",
        message: "What is your employee's ID?",
        name: "employeeID",
      },
      {
        type: "input",
        message: "What is your employee's email?",
        name: "employeeEmail",
      },
      {
        type: "input",
        message: "What is your employee's office number?",
        name: "employeeOfficeNumber",
      },
      {
        type: "list",
        message: "Would you like to add a new member to your team?",
        name: "addNewMember",
        choices: ["Employee", "Engineer", "Intern", "No new members"],
      },
    ])
    .then((response) => {
      console.log(response);
      employeeInfo.push(response);
      console.log(employeeInfo);
    });
};

const getEngineerInfo = () => {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is your engineer's name?",
        name: "engineerName",
      },
      {
        type: "input",
        message: "What is your engineer's ID?",
        name: "engineerID",
      },
      {
        type: "input",
        message: "What is your engineer's email?",
        name: "engineerEmail",
      },
      {
        type: "input",
        message: "What is your engineer's office number?",
        name: "engineerOfficeNumber",
      },
      {
        type: "list",
        message: "Would you like to add a new member to your team?",
        name: "addNewMember",
        choices: ["Employee", "Engineer", "Intern", "No new members"],
      },
    ])
    .then((response) => {
      console.log(response);
      employeeInfo.push(response);
      console.log(employeeInfo);
    });
};

const getInternInfo = () => {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is your intern's name?",
        name: "internName",
      },
      {
        type: "input",
        message: "What is your intern's ID?",
        name: "internID",
      },
      {
        type: "input",
        message: "What is your intern's email?",
        name: "internEmail",
      },
      {
        type: "input",
        message: "What is your intern's office number?",
        name: "internOfficeNumber",
      },
      {
        type: "list",
        message: "Would you like to add a new member to your team?",
        name: "addNewMember",
        choices: ["Employee", "Engineer", "Intern", "No new members"],
      },
    ])
    .then((response) => {
      console.log(response);
      employeeInfo.push(response);
      console.log(employeeInfo);
    });
};

getManagerInfo();

// When the app starts, you have to call a functio0n that asks who the manager is
// Once you're done with that, inside the .then, then you have to call another function which will be a function
// that asks what they want to do next? (add a manger, employee, etc.)
// if the answer engineer, call engineer function, etc.

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!
// render(employeeInfo);

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
