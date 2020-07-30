"use strict";

//function inputOdd () {
//var userInput = parseFloat(prompt("Please put an ODD number between 1 and 50"));

// while (true) {
//     var userInput = parseFloat(prompt("Please put an ODD number between 1 and 50"));
//     if (userInput !== "number") {
//         console.log('empty number is not valid');
//     }
//     console.log('name is valid');
//     break;
// }

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