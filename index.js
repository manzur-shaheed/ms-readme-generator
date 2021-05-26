// ask questions
const inquirer = require("inquirer");
const questions = require("./bin/questions");
const generateMD = require("./bin/generateMD");
const saveMD = require("./bin/saveMD");

// generate markdown from answers
async function main() {
    const answers = await inquirer .prompt(questions);
    const markDown = generateMD(answers));
    await saveMD(markDown);
    open()
}
// save file