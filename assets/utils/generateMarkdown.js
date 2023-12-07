// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

// TODO: Create a function to generate markdown for README
const generateMarkdown = data => {
  return `
## Title 
${data.title}
  


## Description
${data.description}

## Table of Contents
- [Installation](#Installation)
- [Usage](#Usage)
- [License](#License)
- [Contributors](#Contributing)
- [Tests](#Tests)
- [Questions](#Questions)

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
