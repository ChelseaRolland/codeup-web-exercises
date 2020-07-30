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
function showMultiplicationsTable(num) {
    //var table = x * 7
    //return console.log(table);
    for (let i = 1; i <= 10; i++) {
        console.log(num + " x " + i + " = " + (num * i));
    }
}

showMultiplicationsTable(7);

//Question #3
// function getRandomArbitrary(min, max) {
//     return Math.random() * (max - min) + min;
// }

function getRandomNumber (minNumber, maxNumber) {
    return Math.floor(Math.random() * (maxNumber - minNumber + 1) + minNumber);
}

for (let i = 0; i <= 10; i++) {
    var randomNumber = getRandomNumber(20, 200);
    if (randomNumber % 2 === 0) {
        console.log( randomNumber + ": is EVEN");
    } else {
        console.log( randomNumber + ": is ODD");
    }
}

//For Loops #4
for (let i = 1; i < 10; i++) {
    let display = ""; //This is needed to make sure the numbers concate as strings instead of suming as numbers
    for(let j = 0; j < i; j++) {
        display += i;
    } console.log(display);
}

//Short version of #4 and easier to read
for (let z = 1; z <= 9; z++) {
    console.log(z.toString().repeat(z));
}

//For Loops #5
for (let i = 100; i >= 5; i-=5) {
    console.log(i);
}

// function minusBy5(x) {
//     for(let i = x; i > 0; i-=5) {
//         console.log(i);
//     }
// }