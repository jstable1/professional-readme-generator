// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case 'Apache 2.0':
      return `[![License: Apache 2.0](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;

    case 'MIT':
      return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
    
    case 'Unlicense':
      return `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`;
    
    case 'Mozilla':
      return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`;

    case 'None':
      return "";
  }
}

// TODO: Create a function that returns the license link and section
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case 'Apache 2.0':
      return `
## License
<a href="https://opensource.org/licenses/Apache-2.0">Notice: this application is covered under an Apache 2.0 license</a>`;

    case 'MIT':
      return `
## License
<a href="https://opensource.org/licenses/MIT">Notice: this application is covered under a MIT license</a>`;
    
    case 'Unlicense':
      return `
## License
<a href="https://unlicense.org/">Notice: this application is covered under a Unlicense</a>`;
    
    case 'Mozilla':
      return `
## License
<a href="https://opensource.org/licenses/MPL-2.0">Notice: this application is covered under a Mozilla license</a>`;

    case 'None':
      return "";
  }
}

// function to make the license and contributing TOCs options appear dynamically

function renderLicenseTOCSection(license) {
  if (license === 'None'){
    return
  } else {
    `
    * [License](#license)`;
  }
}

function renderContributingTOCSection(license) {
  if (license === null){
    return
  } else {
    `
    * [Contributing](#contributing)`;
  }
}

// TODO: Create a function to generate markdown for README

function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}
## Table of Contents
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage) ${renderLicenseTOCSection(data.license)} ${renderContributingTOCSection(data.contributing)}
* [Tests](#tests)
* [Questions](#questions)

## Description
${data.description}

## Installation
${data.installation}

## Usage
${data.usage}
${renderLicenseLink(data.license)}
${data.contributing&&`
## Contributing
${data.contributing}
`}
## Tests
${data.tests}

## Questions
<a href="mailto:${data.email}"> Click here to email me if you have any questions!</a>
<br>
<a href="https://github.com/${data.github}">GitHub</a>
`;
}

module.exports = generateMarkdown;
