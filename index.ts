#! /usr/bin/env node 

import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.bold.blue.underline("\n \tWelcome to CodeWithBismah - Currency Converter\n"));

let exchangeRates: any = {
    "USD" : 1,      //Base Currency
    "EUR" : 0.9,
    "JYP" : 113,
    "CAD" : 1.3,
    "AUD" : 1.65,
    "PKR" : 278.16
};
let condition = true;

while (condition) {
    let userAns = await inquirer.prompt([
        {
            type : "list",
            name : "from_currency",
            message : chalk.magenta("Select the currency you want to convert:"),
            choices : ["USD","EUR","JYP","CAD","AUD","PKR"]
        },
        {
            type : "list",
            name : "to_currency",
            message : chalk.magenta("Select the currency in which you want to convert:"),
            choices : ["USD","EUR","JYP","CAD","AUD","PKR"]
        },
        {
            type : "number",
            name : "amount",
            message : chalk.rgb(225,76,91)("Enter the amount which you want to convert:"),
        }
    ]);
    
    let from_amount = exchangeRates[userAns.from_currency];
    let to_amount = exchangeRates[userAns.to_currency];
    let amount = userAns.amount;
    
    let base_amount = amount/from_amount;
    let converted_amount = base_amount*to_amount;
    
    console.log(chalk.bold.green("\nConverted Amount ="),chalk.bold.yellow(converted_amount.toFixed(2)),chalk.bold.green(userAns.to_currency),"\n");
  
    let continueExit = await inquirer.prompt([
        {
            type : "list",
            name : "choice",
            message : chalk.yellow("Do you want to continue using the currency converter?\n"),
            choices : [chalk.green("Continue"),chalk.red("Exit")]
        }
    ]);

    if (continueExit.choice === chalk.green("Continue")) {
        condition = true;
    } else if (continueExit.choice === chalk.red("Exit")) {
        condition = false;
    };
};
