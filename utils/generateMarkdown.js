// function to generate markdown for README
function generateMarkdown(data) {
  return `## ${data.title}

  [![MIT License](https://img.shields.io/apm/l/atomic-design-ui.svg?)](https://github.com/tterb/atomic-design-ui/blob/master/LICENSEs)

## Description
${data.Description}

<!-- TABLE OF CONTENTS -->
## Table of contents
* [Installation](#Installation)
* [Usage](#Usage)
* [License](#License)
* [Contributing](#Contributing)
* [Tests](#Tests)
* [Questions](#Questions)
 
## Installation
${data.Installation}

## Usage
${data.Usage}

## License
${data.license}

## Contributing
${data.Contributing}

## Tests
${data.tests}

## Questions
Email: ${data.email}
Github: ${data.github}
`;
}

module.exports = generateMarkdown;
