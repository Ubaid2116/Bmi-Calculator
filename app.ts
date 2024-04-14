#! /usr/bin/env node

console.log(chalk.bold.italic.bgRedBright("\n\tWelcome to Muhammad-Ubaid - BMI Calculator\n"));

import inquirer from "inquirer";
import chalk from "chalk";

let answer = await inquirer.prompt([
  {
    name: "num1",
    type: "number",
    message: "Please enter your weight in kg:",
  },
  {
    name: "num2",
    type: "number",
    message: "Please enter your height in meters:",
  },
]);

let weightInKg = answer.num1;
let heightInMeters = answer.num2;
let bmi = weightInKg / (heightInMeters * heightInMeters);
console.log(chalk.bgYellow.bold(`Your BMI is ${bmi}`));
