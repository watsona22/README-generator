const inquirer = require('inquirer');
const fs = require('fs');

inquirer.prompt([
    {
        type: 'input',
        name: 'name',
        message: 'What is your file name?',
    },
    {
        type: 'input',
        name: 'name',
        message: 'What is your project title?',
    },
    {
        type: 'input',
        name: 'name',
        message: 'What is your project description?',
    },
    {
        type: 'input',
        name: 'name',
        message: 'If you wish to specify a Table of Content, include it here.',
    },
    {
        type: 'input',
        name: 'name',
        message: 'If your project has installatation instructios, include them here.',
    },
    {
        type: 'input',
        name: 'name',
        message: 'What are the usage specifications for your project?',
    },
    {
        type: 'input',
        name: 'name',
        message: 'To whom do you credit your resources an what other attributions do you wish to make?',
    },
    {
        type: 'list',
        message: 'What license can this project be shared?',
        name: 'stack',
        choices: ['None', 'MIT', 'Creative Commons Zero v1.0 Universal'],
    },
    {
        type: 'input',
        name: 'name',
        message: 'If you wish to provide developers with test for the application, include examples here ?',
    },
    {
        type: 'input',
        name: 'name',
        message: 'If you have questions that might be useful for the developer, include them here.',
    },
])
    .then((data) => {
        const filename = `${data.name.toLowerCase().split(' ').join('')}.md`;
        const content = `# ${filename}

## Contact Method
${data.contact}
    `

        fs.writeFile(filename, content, (err) =>
            err ? console.log(err) : console.log('Success!')
        );
        //what's an example of an error in this case? all null values? why isn't it specified here?
        //if inquirer.choices ? None ()
        //if inquirer.choices ? MIT append.([![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT))
    })
    .catch(err => {
        console.log(err)
    });
