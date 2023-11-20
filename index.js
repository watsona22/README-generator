//allows us to import the inquirer package to use
const inquirer = require('inquirer');
//allows us to utilize the file system inside the node environment
const fs = require('fs');
//declare a function with values to include in the license function
function license(response) {
    if (response === "None") {
        return '';
    } else if (response === 'MIT') {
        return '([![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
    } else if (response === 'Creative Commons Zero v1.0 Universal') {
        return '[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)'
    } else
        return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'

}
//async function that creates a promise that will eventually contain all the answers to each prompt
async function generateREADME() {
    try {
        const data = await inquirer.prompt([

            {
                type: 'input',
                name: 'name',
                message: 'What is your file name?',
            },
            {
                type: 'input',
                name: 'description',
                message: 'What is your project description?',

            },
            {
                type: 'confirm',
                name: 'toc',
                message: 'Would you like to include a Table of Contents?',
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
                choices: ['None', 'MIT', 'Creative Commons Zero v1.0 Universal', 'Apache License 2.0'],
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
        ]);

        const licenseInfo = license(data.stack);
        //this writes the values to an .md file & later displays values in the prescribed README format below
        const filename = `${data.name.toLowerCase().split(' ').join('')}.md`;
        const content = `# ${filename}

## Description
            ${data.description}
## Table of Contents
            ${data.toc}
            - [Installation](#installation)
            - [Usage](#usage)
            - [Credits](#credits)
            - [License](#license)
            - [Badges](#badges)
            - [Contribution](#contribution)
            - [Tests](#tests)
            - [Questions](#questions)
## Installation
            ${data.install}
## Usage
            ${data.usage}
## Credits
            ${data.credit}
## License
            ${licenseInfo}
## How to Contribute
            ${data.contribute}
## Tests
            ${data.description}
## Questions
            ${data.description}`
        //once the file is created, there is a success statement otherwise the error is printed out in the catch statement 
        fs.writeFile(filename, content, (err) =>
            err ? console.log(err) : console.log('Success!')
        );
    } catch (err) {
        console.log(err)
    }
}
//the generateREADME function is called here.
generateREADME();


