#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 10000; // Dollar
let myPin = 1234;
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "Enter your pin:",
        type: "number"
    },
]);
// 12345  === 1234 - false
if (pinAnswer.pin === myPin) {
    console.log("Correct pin code!!!");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "Please select one of the operator",
            type: "list",
            choices: ["withdraw", "check balance", "fastCash"],
        }
    ]);
    if (operationAns.operation === "fastCash") {
        let fast = await inquirer.prompt([
            {
                name: "fast_Cash",
                type: "list",
                message: "How much money you want to withdraw",
                choices: ["500", "1000", "2000", "5000", "7000", "10000"]
            }
        ]);
        if (fast.fast_Cash === "500") {
            myBalance -= fast.fast_Cash;
            console.log(`Your remaining balance is: ${myBalance}`);
        }
        if (fast.fast_Cash === "1000") {
            myBalance -= fast.fast_Cash;
            console.log(`Your remaining balance is: ${myBalance}`);
        }
        if (fast.fast_Cash === "2000") {
            myBalance -= fast.fast_Cash;
            console.log(`Your remaining balance is ${myBalance}`);
        }
        if (fast.fast_Cash === "5000") {
            myBalance -= fast.fast_Cash;
            console.log(`Your remaining balance is: ${myBalance}`);
        }
        if (fast.fast_Cash === "7000") {
            myBalance -= fast.fast_Cash;
            console.log(`Your remaining balance is: ${myBalance}`);
        }
        if (fast.fast_Cash === "10000") {
            myBalance -= fast.fast_Cash;
            console.log(`Your remaining balance is: ${myBalance}`);
        }
    }
    else if (operationAns.operation === "withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "Select withdraw amount or select custom amount",
                type: "list",
                choices: ["1000", "2000", "3000", "Enter custom amount"]
            }
        ]);
        let withdrawamount = 0;
        if (amountAns.amount === "Enter custom amount") {
            let customamountanswer = await inquirer.prompt([
                {
                    name: "customamount",
                    message: "Enter custom amount",
                    type: "number"
                }
            ]);
            withdrawamount = customamountanswer.customamount;
        }
        else {
            withdrawamount = parseInt(amountAns.amount);
        }
        if (withdrawamount > myBalance) {
            console.log("Insufficient funds.");
        }
        else {
            myBalance -= withdrawamount;
            console.log("Successfully withdraw:" + withdrawamount);
            console.log("Your remaining balance is:" + myBalance);
        }
    }
    else if (operationAns.operation === "check balance") {
        console.log("Your balance is:" + myBalance);
    }
}
else {
    console.log("Incorrect pin number");
}
