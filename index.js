// main program
const inquirer = require("inquirer");
const questions = require("./utils/questions");
const generateMD = require("./utils/generateMD");
const saveMD = require("./utils/saveMD");

// Prompt questions, generate markdown from answers, save and open md file
async function main() {
    const answers = await inquirer .prompt(questions);
    const markDown = generateMD(answers);
    const fileName = await saveMD(markDown);
    open(fileName);
}

// invoke
main();