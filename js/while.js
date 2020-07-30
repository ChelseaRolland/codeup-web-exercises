"use strict";

//While loop
var x = 2;

while (x <= 65536) {
    console.log(x);
    x *= 2;
}

//DoWhile Loop

// This is how you get a random number between 50 and 100
var allCones = Math.floor(Math.random() * 50) + 50;

//This is how you get a random number between 10 and 20;
//var allCones = Math.floor(Math.random() * 10) + 10;

//console.log(allCones);

do {
    var conesBought = Math.floor(Math.random() * 5) + 1;

    if (allCones > conesBought) {
        console.log(conesBought + " cones sold...");
    } else if (allCones < conesBought) {
        console.log("I can't sell you " + conesBought + ". I only have " + allCones + " left to sell.")
    } else {
        console.log("Yay! I have sold them all!");
    }

    allCones -= conesBought;

} while (allCones >= 0);
