"use strict";

// function showMultiplicationsTable(num) {
//     var table = num * 7
//     return console.log(table);
// }

// showMultiplicationsTable(1);
// showMultiplicationsTable(2);
// showMultiplicationsTable(3);
// showMultiplicationsTable(4);
// showMultiplicationsTable(5);

//Question #2
function showMultiplicationsTable(x) {
    var table = x * 7
    return console.log(table);
}

for (let x = 0; x <= 10; x++) {
    showMultiplicationsTable(x);
}

//Question #3
// function getRandomArbitrary(min, max) {
//     return Math.random() * (max - min) + min;
// }

function randomNumber (minNumber, maxNumber) {
    return Math.floor(Math.random() * (maxNumber - minNumber) + minNumber);
}

for (let y = 0; y <= 10; y++) {
    var testNumber = randomNumber(20, 200);
    if (testNumber % 2 === 0) {
        console.log( testNumber + " is EVEN");
    } else {
        console.log( testNumber + " is ODD");
    }
}

//For Loops #4
for (let i = 1; i < 10; i++) {
    let display = ""; //This is needed to make sure the numbers concate instead of suming
    for(let j = 0; j < i; j++) {
        display += i;
    } console.log(display);
}

//For Loops #5
function minusBy5(x) {
    for(let i = x; i > 0; i-=5) {
        console.log(i);
    }
}