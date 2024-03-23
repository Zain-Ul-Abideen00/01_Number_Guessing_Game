#! /usr/bin/env node
// shabang command for publish this code on NPM
// now code starts from here below
import inquirer from "inquirer";
// computer will generate a random number
const randomNumber = Math.floor(Math.random() * 6 + 1);
// User input for guessing number
const answer = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Please guess a number between 1-6:",
    },
]);
// Compare user input with computer generated number and show result
if (answer.userGuessedNumber === randomNumber) {
    console.log("Congratulations! you guessed the right number");
}
else {
    console.log("You guessed the wrong number");
}
