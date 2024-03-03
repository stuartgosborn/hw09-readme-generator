// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require('inquirer');


// Sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions (GitHub username, email, instructions for contact)
// TODO: Create an array of questions for user input
const questions = [
    'What is the name of your project?', 
    'Please provide a brief description of your project.',
    'Please provide any installation instructions.' ,
    'Please provide instuctions and examples for use.',
    'What type of license does your project have?',
    'Who contributed to the project?',
    'What test, if any, did you write for the applicaiton?'
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
