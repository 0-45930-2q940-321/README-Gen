// TODO: Create a function that returns a license badge based on which license is passed in

function renderLicenseBadge(data) {
  //Using switch case to go by each outcome and editing the data.license property to coorespond with the outcome
  switch (data.license) {
    case 'MIT':
      data.license = `![MIT license](https://img.shields.io/badge/License-MIT-yellow.svg)`;
      break;

    case 'GPLv3':
      data.license = `![GPL 3.0 license](https://img.shields.io/badge/License-GPL_3.0-green.svg)`;
      break;

    case 'GPL':
      data.license = `![GPL license](https://img.shields.io/badge/License-GPL-blue.svg)`;
      break;

    case 'APCHE 2.0':
      data.license = `[APCHE 2.0 license](https://img.shields.io/badge/License-APCHE_2.0-purple.svg)`;
      break;

    case 'BSD 3':
      data.license = `[BSD 3 license](https://img.shields.io/badge/License-BSD_3-red.svg)`;
  }
  //Returning the data.license property outcome
  return data.license
}

// TODO: Create a function to generate markdown for README

//Function to call in the 'init' function. Making the markdown and insert the data properites.
function generateMarkdown(data) {
  return `# ${data.title}

  ## License
  ${renderLicenseBadge(data)}

  ## Description 

  ${data.description}

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)


## Installation

${data.installation}

## Usage

${data.usage}

## Credits

${data.contribution}

---

## Contact

Please contact me if you have any questions.

[Github](https://github.com/${data.username})

Email: ${data.email} 
`;
}

module.exports = generateMarkdown;
