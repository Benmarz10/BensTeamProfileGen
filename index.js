const inquirer = require('inquirer');
const fs = require('fs');
const generateHTML = require('./src/generateHTML');
const engineer = require('./lib/engineer');
const intern = require('./lib/intern');
const manager = require('./lib/manager.js');

let teamInfo = {
  engineerInfo: [], 
  internInfo: [], 
  managerInfo: []
};

function managerQuestions() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "mgrName",
        message: "What is the name of the manager?",
      },
      {
        type: "input",
        name: "EmployeeID",
        message: "What is your employee ID?",
      },
      {
        type: "input",
        name: "email",
        message: "What is your email address?",
      },
      {
        type: "input",
        name: "OfficeNumber",
        message: "What is your Office Number?",
      },
    ])
    .then((answers) => {
      const newManager = new manager(
        answers.mgrName,
        answers.EmployeeID,
        answers.email,
        answers.OfficeNumber
      );
      teamInfo.managerInfo = newManager;
      nextEmployee();
    });
}

function nextEmployee() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "Team",
        message: "Do you need to add another team member?",
        choices: [
          "Yes I need to add an Engineer",
          "Yes I need to add an intern",
          "No",
        ],
      },
    ])
    .then((answers) => {
      if (answers.Team === "Yes I need to add an Engineer") {
        engineerQuestions();
      }
      if (answers.Team === "Yes I need to add an intern") {
        internQuestions();
      }
      if (answers.Team === "No") {
        generateHTML();
      }
    });
}

function internQuestions() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "intName",
        message: "Enter the interns name",
      },
      {
        type: "input",
        name: "intID",
        message: "Enter the interns ID",
      },
      {
        type: "input",
        name: "intEmail",
        message: "Enter the interns email",
      },
      {
        type: "input",
        name: "school",
        message: "Enter the interns school",
      },
    ])
    .then((answers) => {
      const newIntern = new intern(
        answers.intName,
        answers.intID,
        answers.intEmail,
        answers.school
      );
      teamInfo.internInfo.push(newIntern);
      nextEmployee();
    });
}

function engineerQuestions() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "engName",
        message: "Enter the name of the engineer",
      },
      {
        type: "input",
        name: "engID",
        message: "Enter the ID of the engineer",
      },
      {
        type: "input",
        name: "engEmail",
        message: "Enter the email of the engineer",
      },
      {
        type: "input",
        name: "Github",
        message: "Enter the GitHub of the engineer",
      },
    ])
    .then((answers) => {
      const newEngineer = new engineer(
        answers.engName,
        answers.engID,
        answers.engEmail,
        answers.Github
      );
      teamInfo.engineerInfo.push(newEngineer);
      nextEmployee();
    });
}
function generateHTML() {
  fs.writeFile("sample.html", generateHTML(teamInfo), (err) =>
    err ? console.log(err) : console.log(".")
  );
}

managerQuestions();