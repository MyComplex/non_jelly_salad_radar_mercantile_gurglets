const fs = require('fs');
const inquirer = require('inquirer');
const prompts = [
    {
        type: 'input',
        name: 'project-title',
        message: 'Please enter your project title:',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a short description explaining the what, why, and how of your project.',
    },
    {
        type: 'input',
        name: 'motivation',
        message: 'What was your motivation?',
    },
    {
        type: 'input',
        name: 'reason',
        message: 'Why did you build this project?',
    },
    {
        type: 'input',
        name: 'solution-to',
        message: 'What problem does it solve?',
    },
    {
        type: 'input',
        name: 'learn',
        message: 'What did you learn?',
    },
]