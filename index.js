#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let todos = [""];
let condition = true;
while (condition) {
    let answer = await inquirer.prompt([
        {
            name: "todo",
            type: "input",
            message: chalk.bold.blueBright("What do you want to add in your Todos ?")
        },
        {
            name: "addMore",
            type: "confirm",
            default: false,
            message: chalk.bold.blueBright("Do you want to add more ?")
        }
    ]);
    const { todo, addMore } = answer;
    console.log(answer);
    condition = addMore;
    if (todo) {
        todos.push();
    }
    else {
        console.log(chalk.red("Kindly add valid input"));
    }
    if (todo.length > 0) {
        todos.forEach(todo => {
            console.log(chalk.gray("Your todo list", todo));
        });
    }
    else {
        console.log(chalk.redBright("Todos not found"));
    }
}
