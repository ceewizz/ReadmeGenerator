// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

// TODO: Create a function to generate markdown for README
const generateMarkdown = data => {
  return `# ${data.title}
  
![Github license](http://img.shields.io/badge/license-${data.license}-blue.svg)

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributors](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${data.install}


## Usage
${data.usage}

## License
${data.license}


## Contributors
${data.contributors}



## Tests
${data.test}

## Questions
Questions? Email me at ${data.email}. You can view more at https://github.com/${data.github}`;
}


module.exports = generateMarkdown;
