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

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case 'Apache 2.0':
      return `<a href="https://opensource.org/licenses/Apache-2.0">Apache 2.0</a>`;

    case 'MIT':
      return `<a href="https://opensource.org/licenses/MIT">MIT</a>`;
    
    case 'Unlicense':
      return `<a href="https://unlicense.org/">Unlicense</a>`;
    
    case 'Mozilla':
      return `<a href="https://opensource.org/licenses/MPL-2.0">Mozzila</a>`;

    case 'None':
      return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README

function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}
## Table of Contents
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)

## Description
${data.description}

## Installation
${data.installation}

## Usage
${data.usage}

## License
${data.license}
${data.contributing&&`
## Contributing
${data.contributing}
`}
## Tests
${data.tests}
`;
}

module.exports = generateMarkdown;
