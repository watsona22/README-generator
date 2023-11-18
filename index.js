const inquirer = require('inquirer');
const fs = require('fs');

function questions() {
    inquirer.prompt([
    const questions = [
        {
            type: 'input',
            name: 'name',
            message: 'What is your file name?',
        },
        {
            type: 'input',
            name: 'title',
            message: 'What is your project title?',
        },
        {
            type: 'input',
            name: 'description',
            message: 'What is your project description?',
        },
        {
            type: 'input',
            name: 'toc',
            message: 'If you wish to specify a Table of Content, include it here.',
        },
        {
            type: 'input',
            name: 'install',
            message: 'If your project has installatation instructions, include them here.',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'What are the usage specifications for your project?',
        },
        {
            type: 'input',
            name: 'credit',
            message: 'To whom do you credit your resources an what other attributions do you wish to make?',
        },
        {
            type: 'list',
            message: 'Under what license can this project be shared?',
            name: 'stack',
            choices: ['None', 'MIT', 'Creative Commons Zero v1.0 Universal'],
        },
        {
            type: 'list',
            message: 'What badges would you like to share?',
            name: 'badge',
            choices: ['None', 'MIT', 'Creative Commons Zero v1.0 Universal'],
        },
        {
            type: 'input',
            name: 'contribute',
            message: 'How can other developers contribute to the project ?',
        },
        {
            type: 'input',
            name: 'test',
            message: 'If you wish to provide developers with test for the application, include examples here ?',
        },
        {
            type: 'input',
            name: 'questions',
            message: 'If you have questions that might be useful for the developer, include them here.',
        },
    ]
};
    .then((data) => {
    const filename = `${data.name.toLowerCase().split(' ').join('')}.md`;
    const content = `# ${filename}`
        `## Description await input ({message: 'What is your project title?}``
        ${data.description}
        ## Table of Contents
        ${data.toc}
        ## Installation
        ${data.install}
        ## Usage
        ${data.usage}
        ## Credits
        ${data.credit}
        ## License
        ${data.stack}
        ## Badges
        ${data.badge}
        ## How to Contribute
        ${data.contribute}
        ## Tests
        ${data.description}
        ## Questions
        ${data.description}

            `

    fs.writeFile(filename, content, (err) =>
        err ? console.log(err) : console.log('Success!')
    );
    //if inquirer.choices ? MIT append.([![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT))
})

    .catch(err => {
        console.log(err)
    });


// const content = await input({ message: 'Enter your name', message: 'What is your project title?' });

function init() {
    inquirer.prompt(questions)

}
init();