// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const fetch = require('node-fetch');

/* FETCHING LICENSE TAGS FROM GITHUB */
const licenseUrl = 'https://api.github.com/licenses';
fetch(licenseUrl)
    .then(response => response.json())
    .then(data => {
        const licenseTypeArray = data.map(obj => obj.spdx_id);
// TODO: Create an array of questions for user input
        const questions = [
            {
                type: 'input',
                name: 'title',
                message: 'Enter your project title:',
                default: 'TESTING README GENERATIS TITLING'
            },
            {
                type: 'input',
                name: 'description',
                message: 'Provide a short description explaining the what, why, and how of your project:',
                default: 'TESTING README GENERATIS DESCRIBING'
            },
            {
                type: 'input',
                name: 'installation',
                message: 'Provide instructions on how to install your application:',
                default: 'TESTING README GENERATIS INSTALLING'
            },
            {
                type: 'input',
                name: 'usage',
                message: 'Provide information on how your application is used:',
                default: 'TESTING README GENERATIS USING'
            },
            {
                type: 'input',
                name: 'contributing',
                message: 'Provide guidelines on how someone can contribute to your project:',
                default: 'TESTING README GENERATIS CONTRIBUTING'
            },
            {
                type: 'input',
                name: 'tests',
                message: 'Provide instructions on how to test your application:',
                default: 'TESTING README GENERATIS TESTING'
            },
            {
                type: 'list',
                name: 'license',
                message: 'Choose the license your application will be released under.',
                choices: licenseTypeArray,
                loop: false
            },
            {
                type: 'input',
                name: 'github',
                message: 'Enter your GitHub username.',
                default: "octocat"
            },
            {
                type: 'input',
                name: 'email',
                message: 'Enter your email address.',
                default: "octocat@github.com"
            }
        ];

        inquirer
            .prompt(questions)
            .then((answers) => {
// Use user feedback for... whatever!!
                fs.writeFileSync('README.md', `# ${answers.title}
                
                ![Static Badge](https://img.shields.io/badge/license-${answers.license}-green)

                ## Description

                ${answers.description}

                ## Table of Contents

                - [Installation] (#${answers.installation})
                - [Usage] (#${answers.usage})
                - [Contributing] (#${answers.contributing})
                - [Testing] (#${answers.tests})
                - [License] (#${answers.license})
`);
            });

    })
    .catch(err => {
        console.log('An error occurred: ' + err);
    });

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
// init();
