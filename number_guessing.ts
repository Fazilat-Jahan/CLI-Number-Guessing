import inquirer from "inquirer";

const randomeNum = Math.floor(Math.random() * 6 +1)
const answer = await inquirer.prompt([{
    name: "UserGuessNum",
    type: "number",
    message: "Please Guess a Number Between 1 to 6: \t",

}])
if (answer.UserGuessNum === randomeNum){
console.log("Congragulations! You Guess The Right Number")
} else {
    console.log(" Sorry! Your Guessing Number Is Wrong, Try Again Please")
}
