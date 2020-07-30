"use strict";

//function inputOdd () {
//var userInput = parseFloat(prompt("Please put an ODD number between 1 and 50"));

while (true) {
    var userInput = parseFloat(prompt("Please put an ODD number between 1 and 50"));
    console.log(userInput);
    console.log(typeof userInput);

    if (!isNaN(userInput) && userInput % 2 !== 0 && userInput <= 50 && userInput > 0) {
        console.log("number input valid");
        break;
    } console.log("number input is not valid");


    // if (( typeof userInput === "string") && (!isNaN(userInput))) {
    //     console.log('number is valid');
    // } else  {
    // console.log('number is not valid') };
    // break;
}

console.log("Number to skip is: " + userInput);

for (let i = 0; i <= 50; i++) {
    if (i % 2 === 0) {
        continue;
    }
    if (userInput === i) {
        console.log("Yikes! Skipping number: " + i);
    } else {
        console.log("Here is an odd number: " + i);
    }
}
//}