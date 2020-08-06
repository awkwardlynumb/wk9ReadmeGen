const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is your project title?",
  },
  {
    type: "input",
    name: "Description",
    message: "Please enter a description",
  },
  {
    type: "input",
    name: "Installation",
    message: "Please enter installation instructions",
  },
  {
    type: "input",
    name: "Usage",
    message: "Please enter instrcutions for use",
  },
  {
    type: "list",
    name: "license",
    choices: ["Public Domain", "MIT", "LPGL"],
    message: "Which license do you want to use?",
  },
  {
    type: "input",
    name: "Contributing",
    message: "Please inter instructions for contributions",
  },
  {
    type: "input",
    name: "tests",
    message: "Please enter testing instructions",
  },
  {
    type: "input",
    name: "email",
    message: "What is your email address?",
  },
  {

    type: "input",
    name: "github",
    message: "What is your github username?"

  },
];

// function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, "UTF-8", function (error) {
    if (error) {
      console.log(error);
    } else {
      console.log("success");
    }
  });
}

// function to initialize program
function init() {
    inquirer
    .prompt(questions)
    .then((answers) => {
      console.log({answers});
      const readMeString = generateMarkdown(answers);
      writeToFile("README.md", readMeString);
    })
    .catch((error) => {
      console.log(error);
    });
}

// function call to initialize program
init();
