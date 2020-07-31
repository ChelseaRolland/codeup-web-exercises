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
}

console.log("Number to skip is: " + userInput);

for (let i = 0; i < 50; i++) {
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

//with the instructor

var num;

while (true) {
    num = parseFloat(prompt("Please put an ODD number between 1 and 50"));
    if (num % 2 !== 0 && num > 0 && num < 51) {
        break;
    } //else continue; //do not need this portion; this can be left blank
}

for (let i = 1; i < 50; i+=2) {
    if (num === i) {
        console.log("Yikes! Skipping number: " + i) //or num since num and i are the same)
        continue;
    }
    console.log("Here is an ODD number: " + i);
}

//while loop below that is the same as a for loop
var i = 1;
while(i < 50) {
    if (i === num) {
        console.log("Yikes! Skipping the number: " + i ) //or num since num and i are the same)
        continue;
    }
    console.log("Here is an ODD number: " + i);
    i+=2;
}