// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');


// directing to where the readme is dev.
const generatePage = require('./utils/generateMarkdown.js');
// Create an array of questions for user input
const questions = () => {

    // prompting user for questions using inquirer 
    return inquirer.prompt([

    {
        type: 'input',
        name: 'github',
        message: 'Enter github username',
        validate: userInput => {
            if (userInput) {
                return true;
            }
            else {
                console.log('Please enter a valid github username!');
                return false;
            }
            }
        },
    {
        type: 'input',
        name: 'email',
        message: 'Enter email address',
        validate: userInput => {
            if (userInput) {
                return true;

    }
    else {
        console.log('Please enter a valid email address!');
        return false;

    }
}
    },
    {
        type: 'input',
        name: 'title',
        message: 'Enter your project title',
        validate: userInput => {
            if (userInput) {
                return true;

    }
    else {
        console.log('Please enter a name for your project');
        return false;
    }
}
    },
    {
        type : 'input',
        name: 'description',
        message: 'Please enter a short description for your project',
        validate: userInput => {
            if (userInput) {
                return true;
            }
            else {
                console.log('Please enter a description for your project');
                return false;
            }

            }
        },
        {
            type: 'list',
            name: 'license',
            message: 'What is your license for this project?',
            choices: ['GNU', 'MIT'],
            default: ["GNU"],
            validate: userInput => {
                if (userInput) {
                    return true;
                }
                else {
                    console.log('Please enter a license for this project');
                    return false;

                }
        }

    },
    {
        type: 'input',
        name: 'install',
        message: 'What are the requirements to install your project?',
        validate: userInput => {
            if (userInput) {
                return true;

            }
            else {
                console.log('Please enter a valid requirement to install your project');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Instructions to use this project',
        validate: userInput => {
            if (userInput) {
                return true;
            }
            else {
                console.log('Please enter instruction usage to use this project');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'test',
        message: 'Command to test this project',
        default: 'node index.js'

    },
    {
        type: 'input',
        name: 'contributors',
        message: 'List of contributors to use this project',
    }

]);
};

 

// Create a function to write README file
const writeFile = data => {
    fs.writeFile('README.md', data, err => {
        // Error
        if(err) {
            console.log(err);
            return;
        }
        else {
            console.log('Your README has been successfully created')

        }
        })
    };
    
    
   questions()
   .then(answers => {
    return generatePage(answers);
   })
   .then(data => {
    return writeFile(data);
   })
   .catch(err => {
    console.log(err)
})


