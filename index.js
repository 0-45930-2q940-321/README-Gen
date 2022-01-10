// TODO: Include packages needed for this application
const fs = require('fs')
const inquirer = require('inquirer')
const generateMarkdown = require('./utils/generateMarkdown')
// TODO: Create an array of questions for user input

//Array of questions to pass into the inquirer.prompt
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the name of your Project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Can you describe what your project is?'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What step are required to install your project?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How do you use your project?'
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Do you have anything to credit?',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please select one license.',
        choices: ['MIT', 'APCHE 2.0', 'BSD 3', 'GPL-3.0', 'GPL']
        //Add a license badge
    },
    {
        type: 'input',
        name: 'username',
        message: 'Please enter your Github username.'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter your email.'
    }
]

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

    fileName = 'README'
    //The parameters resoluve and reject will be used in this Promise to check if the file will have errors or write
    return new Promise((resolve, reject) => {

        fs.writeFile(fileName, data, err => {

            if (err) {
                reject(err);
                return false;
            }
            resolve(data)
        });
    });
};

// TODO: Create a function to initialize app
function init() {
    //Starting the prompt and using the questions from the questions array
    inquirer.prompt(questions)
        .then(data => {
            //Putting a default string to output if no contribution is needed.
            if (!data.contribution || data.contribution === '') {
                data.contribution = 'There are no one to credit and/or mention for this project. If I miss any credit to give, please contact me for corrections!';
                const fillInInfoPage = generateMarkdown(data)
                return writeToFile('README.md', fillInInfoPage);
            }
            //Putting the data into a table to see the outcome
            console.table(data)
            //Will call the function with passing arguements, creating a file called 'README.md' and using data from the inquirer.prompt
            const fillInInfoPage = generateMarkdown(data)
            return writeToFile('README.md', fillInInfoPage);
        })
        .catch(err => {
            console.log(err);
        });
}

// Function call to initialize app
init();