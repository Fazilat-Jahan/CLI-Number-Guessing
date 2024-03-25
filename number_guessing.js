import inquirer from "inquirer";
let attempts;
let maxAttempt = 5;
const randomeNum = Math.floor(Math.random() * 6 + 1);
for (attempts = 1; attempts <= maxAttempt; attempts++) {
    const answer = await inquirer.prompt([{
            name: "UserGuessNum",
            type: "number",
            message: "Please Guess a Number Between 1 to 6, you have only 5 maximum attempts: \t",
        }]);
    if (answer.UserGuessNum < 1 || answer.UserGuessNum > 6) {
        console.log(`invalid number, please put number between 1 to 6`);
    }
    else if (answer.UserGuessNum === randomeNum) {
        console.log(`\n Congragulations! You Guess The Right Number ${randomeNum} in ${attempts} attemps. \n`);
    }
    else {
        console.log(`\n Sorry! Your Guessing Number Is Wrong, Please Try Again. Your remaining attemps is ${maxAttempt - attempts}. \n`);
    }
    if (attempts == 5) {
        console.log(`\n You reached your maximum attemps. The correct number is ${randomeNum}`);
    }
}
