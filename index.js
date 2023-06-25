// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Enter your project title:',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a short description explaining the what, why, and how of your project:',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Provide instructions on how to install your application:',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide information on how your application is used:',
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Provide guidelines on how someone can contribute to your project:',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Provide instructions on how to test your application:',
    },
    {
        type: 'input',
        name: 'license',
        message: 'Choose the license your application will be released under.',
    },
]

inquirer
  .prompt(questions)
  .then((answers) => {
    // Use user feedback for... whatever!!
    console.log(answers);
  })
//   .catch((error) => {
//     if (error.isTtyError) {
//       // Prompt couldn't be rendered in the current environment
//     } else {
//       // Something else went wrong
//     }
//   });

// const licenses = function(license) {
//     fetch('https://api.github.com/licenses')
//     .then(response => response.json())
//     .then(data => console.log(data))
// }

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
// init();
