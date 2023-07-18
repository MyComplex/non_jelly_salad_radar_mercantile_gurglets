/* PACKAGE DEPENDENCIES */
const fs = require('fs');
const inquirer = require('inquirer');
const fetch = require('node-fetch');

/* FETCHING LICENSE TAGS FROM GITHUB */
const licenseUrl = 'https://api.github.com/licenses';
fetch(licenseUrl)
    .then(response => response.json())
    .then(data => {
        const licenseTypeArray = data.map(obj => obj.spdx_id);
        /* PROMPT FOR USER INPUT */
        inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'title',
                    message: 'Enter your project title:',
                    default: 'Professional README.md Generator'
                },
                {
                    type: 'input',
                    name: 'description',
                    message: 'Provide a short description explaining the what, why, and how of your project:',
                    default: 'This application takes input from the user and generates a professional README.md file with information about the application.'
                },
                /* CONFIRM IF SECTION SHOULD BE INCLUDED */
                // {
                //     type: 'confirm',
                //     name: 'hasInstallation',
                //     message: 'Do yo have installation instructions for your application?',
                //     default: false
                // },
                {
                    type: 'input',
                    name: 'installation',
                    message: 'Provide instructions on how to install your application:',
                    /* PART OF THE CONFIRMATION LOGIC FROM ABOVE */
                    // when: answers => answers.hasInstallation,
                    default: 'Clone the repository, change to the cloned application directory, and run "npm install."'
                },
                {
                    type: 'input',
                    name: 'usage',
                    message: 'Provide information on how your application is used:',
                    default: 'To use this application, enter "node index.js" in your terminal and hit the "Enter" key.'
                },
                {
                    type: 'input',
                    name: 'contributing',
                    message: 'Provide guidelines on how someone can contribute to your project:',
                    default: 'Feel free to fork this repository and create a Pull Request.'
                },
                {
                    type: 'input',
                    name: 'tests',
                    message: 'Provide instructions on how to test your application:',
                    default: 'npm run test'
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
            ])
            .then((answers) => {
                /* FETCH BODY FOR SELECTED LICENSE AND GENERATE LICENSE FILE FOR REPOSITORY */
                for (let i = 0; i < data.length; i++) {
                    const element = data[i];
                    if (element.spdx_id === answers.license) {
                        fetch(element.url)
                            .then(license => license.json())
                            .then(licData => {
                                fs.writeFileSync('LICENSE', licData.body);
                                let licFile = fs.readFileSync('LICENSE', 'utf-8');
                                const licDate = new Date().getFullYear();
                                const yearAndName = `${licDate} ${answers.github}`;
                                licFile = licFile.replace('[year] [fullname]', yearAndName);
                                fs.writeFileSync('LICENSE', licFile);
                            });
                    }
                }
                /* REPLACE HYPHENS WITH UNDERSCORES FOR SHIELDS.IO STATIC BADGE URL */
                const badgeFriendlyLicenseUrl = encodeURI(`https://img.shields.io/badge/license-${answers.license.replace('-', '_')}-green`);
                /* WRITE TO README.md FILE */
                fs.writeFileSync('README.md', `
# ${answers.title}

![Static Badge](${badgeFriendlyLicenseUrl})

## Description

${answers.description}

## Table of Contents

- [Installation](#Installation)
- [Usage](#Usage)
- [Contributing](#Contributing)
- [Testing](#Testing)
- [License](#License)

## Installation

To install this application, perform the following:

${answers.installation}

## Usage

${answers.usage}

## License

[${answers.license}](./LICENSE) © ${answers.github}

## Contributing

${answers.contributing}

## Test

To test this application, complete the installation steps from above and enter the following in your terminal:

${answers.tests}

## Questions

If you have any questions, please feel free to reach out to me via [email](mailto:${answers.email}) or on [Github](https://github.com/${answers.github}/).
`);
            });

    })
    .catch(err => {
        console.log('An error occurred: ' + err);
    });