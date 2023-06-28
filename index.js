// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const fetch = require('node-fetch');
const { makeBadge, ValidationError } = require('badge-maker');

/* FETCHING LICENSE TAGS FROM GITHUB */
function fetchLicenseTags(e) {
    const licenseUrl = 'https://api.github.com/licenses';
    fetch(licenseUrl)
        .then(response => response.json())
        .then(data => data.map(obj => obj.spdx_id))
        .then(tags => {
            genQuestions(tags);
        })
        .catch(err => {
            console.log('Error in fetchLicenseTags: ' + err);
        })

}

// TODO: Create an array of questions for user input
function genQuestions(tags) {
    const questions = [
        {
            type: 'input',
            name: 'title',
            message: 'Enter your project title:',
            default: 'TESTING README GENERATIS TITLING',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Provide a short description explaining the what, why, and how of your project:',
            default: 'TESTING README GENERATIS DESCRIBING',
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Provide instructions on how to install your application:',
            default: 'TESTING README GENERATIS INSTALLING',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Provide information on how your application is used:',
            default: 'TESTING README GENERATIS USING',
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'Provide guidelines on how someone can contribute to your project:',
            default: 'TESTING README GENERATIS CONTRIBUTING',
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Provide instructions on how to test your application:',
            default: 'TESTING README GENERATIS TESTING',
        },
        {
            type: 'list',
            name: 'license',
            message: 'Choose the license your application will be released under.',
            default: 'TESTING README GENERATIS LICENSING',
        },
    ]
}

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
