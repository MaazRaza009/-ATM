#! /usr/bin/env node
import inquirer from "inquirer";

let myBalance = 10000; // Dollar

let myPin = 1234;

let pinAnswer = await inquirer.prompt(
    [
    {
        name: "pin",
        message: "Enter your pin:",
        type: "number"
    },
    ]
);
// 12345  === 1234 - false
if(pinAnswer.pin === myPin){
    console.log("Correct pin code!!!")
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "Please select one of the operator",
            type: "list",
            choices: ["withdraw", "check balance"],
        }
     ]
     );

     if(operationAns.operation === "withdraw"){
        let amountAns = await inquirer.prompt(
            [
                {
                    name: "amount",
                    message: "Select withdraw amount or select custom amount",
                    type: "list",
                    choices: ["1000", "2000", "3000", "Enter custom amount"]
                }
            ]
        );
        let withdrawamount = 0;
        if (amountAns.amount === "Enter custom amount"){
        let customamountanswer = await inquirer.prompt(
    [
        {
            name: "customamount",
            message: "Enter custom amount",
            type: "number"
        }
    ]
    );
    withdrawamount = customamountanswer.customamount;
}else{
    withdrawamount = parseInt(amountAns.amount);
}
if(withdrawamount > myBalance){
    console.log("Insufficient funds.")
}
else{
    myBalance -= withdrawamount;
    console.log("Successfully withdraw:" + withdrawamount)
    console.log("Your remaining balance is:" + myBalance)
}
}else if (
    operationAns.operation === "check balance"
){
    console.log("Your balance is:" + myBalance)
}
}else{
    console.log("Incorrect pin number");
}


    
