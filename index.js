// main program
const inquirer = require("inquirer");
const questions = require("./utils/questions.js");
const generateMD = require("./utils/generateMD.js")

// Prompt questions, generate markdown from answers, save and open md file
function main() {
    inquirer
    .prompt(questions)
    .then((responses) => {
        console.log(responses);
        generateMD(responses);
    });

}

// invoke
main();