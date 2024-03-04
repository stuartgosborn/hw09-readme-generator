// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// Sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions (GitHub username, email, instructions for contact)
// TODO: Create an array of questions for user input
const questions = [
  {
    name: "title",
    message: "What is the name of your project?",
    type: "input",
  },
  {
    name: "description",
    message: "Please provide a brief description of your project.",
    type: "input",
  },
  {
    name: "installation",
    message: "Please provide any installation instructions.",
    type: "input",
  },
  {
    name: "instructions",
    message: "Please provide instuctions and examples for use.",
    type: "input",
  },
  {
    name: "license",
    message: "What type of license does your project have?",
    type: "list",
    choices: ["Apache", "BSD3", "GNU GPLv3", "MIT"],
  },
  {
    name: "contributors",
    message: "Who contributed to the project?",
    type: "input",
  },
  {
    name: "test",
    message: "What test, if any, did you write for the applicaiton?",
    type: "checkbox",
    choices: [
      "Functional",
      "Performance",
      "Security",
      "Usability",
      "Compatibility",
      "Interface",
    ],
  },
  {
    name: "github",
    message: "What is your GitHub profile name?",
    type: "input",
  },
  {
    name: 'email',
    message: 'What is your email address?',
    type: 'input',
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  const successMsg = `Success! ${fileName} is being written with ${JSON.stringify(data)}`;
  fs.writeFile(fileName, generateMarkdown(data), err => err ? console.log(err): console.log(successMsg))
}

// TODO: Create a function to initialize app
function init() {
   inquirer.prompt(questions)
   .then(response => writeToFile('README.md', response));
}

// Function call to initialize app
init();
