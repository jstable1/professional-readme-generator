// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the name of your project? (Required)',
            validate: titleInput => {
                if (titleInput) {
                    return true;
                } else {
                    console.log('Please enter your project name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Provide a description of your project. (Required)',
            validate: descriptionInput => {
                if (descriptionInput) {
                    return true;
                } else {
                    console.log('Please enter a description of your project!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Provide installation instructions for your project. (Required)',
            validate: installationInput => {
                if (installationInput) {
                    return true;
                } else {
                    console.log('Please enter installation instructions for your project!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Provide usage instructions for your project. (Required)',
            validate: usageInput => {
                if (usageInput) {
                    return true;
                } else {
                    console.log('Please enter usage instructions for your project!');
                    return false;
                }
            }
        },
        {
            type: 'checkbox',
            name: 'license',
            message: 'What is the license for your application? (Required)',
            choices: ['Public Domain', 'Permissive', 'LGPL', 'Copyleft', 'Proprietary'],
            validate: licenseInput => {
                if (licenseInput) {
                    return true;
                } else {
                    console.log('Please enter licensing information!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'contributing',
            message: '???',
        },
        {
            type: 'input',
            name: 'tests',
            message: '???',
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter your GitHub Username (Required)',
            validate: githubInput => {
              if (githubInput) {
                return true;
              } else {
                console.log('Please enter your GitHub username!');
                return false;
              }
            }
          },
          {
            type: 'input',
            name: 'email',
            message: 'Enter your email address (Required)',
            validate: emailInput => {
              if (emailInput) {
                return true;
              } else {
                console.log('Please enter your email address!');
                return false;
              }
            }
          },
    ])
};

questions().then(answers => console.log(answers));

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
