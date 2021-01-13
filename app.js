const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const Employee = require("./lib/Employee");

// Variable to store employee information
const employees = [];

// Function to ask if the user wants to add a new member
const addMember = () => {
  inquirer
    .prompt([
      {
        type: "list",
        message: "Would you like to add a new member to your team?",
        name: "addNewMember",
        choices: ["Employee", "Engineer", "Intern", "No new members"],
      },
    ])
    .then((response) => {
      if (response.addNewMember === "Employee") {
        getEmployeeInfo();
      } else if (response.addNewMember === "Engineer") {
        getEngineerInfo();
      } else if (response.addNewMember === "Intern") {
        getInternInfo();
      } else {
        console.log("Your team members have been added!");
        if (fs.existsSync("./output")) {
          const renderEmployees = render(employees);
          fs.writeFileSync(outputPath, renderEmployees, "utf-8");
        } else {
          fs.mkdir("./output", function (err) {
            if (err) {
              console.log(err);
            } else {
              console.log("New directory successfully created.");
              const renderEmployees = render(employees);
              fs.writeFileSync(outputPath, renderEmployees, "utf-8");
            }
          });
        }
      }
    });
};

// Function to get manager information (name, ID, email, and office number)
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
    ])
    .then((response) => {
      addMember();
      const manager = new Manager(
        response.managerName,
        response.managerID,
        response.managerEmail,
        response.managerOfficeNumber
      );
      employees.push(manager);
    });
};

// Function to get employee information (name, ID, and email)
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
    ])
    .then((response) => {
      addMember();
      const employee = new Employee(
        response.employeeName,
        response.employeeID,
        response.employeeEmail
      );
      employees.push(employee);
    });
};

// Function to get engineer information (name, ID, and GitHub username)
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
        message: "What is your engineer's GitHub username?",
        name: "engineerGitHub",
      },
    ])
    .then((response) => {
      addMember();
      const engineer = new Engineer(
        response.engineerName,
        response.engineerID,
        response.engineerEmail,
        response.engineerGitHub
      );
      employees.push(engineer);
    });
};

// Function to get intern information (name, ID, email, and school)
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
        message: "Where does your intern go to school?",
        name: "internSchool",
      },
    ])
    .then((response) => {
      addMember();
      const intern = new Intern(
        response.internName,
        response.internID,
        response.internEmail,
        response.internSchool
      );
      employees.push(intern);
    });
};

const init = () => {
  getManagerInfo();
};

init();

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

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
