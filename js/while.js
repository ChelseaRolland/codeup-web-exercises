"use strict";

//While loop
var x = 2;
while (x <= 65536) {
    console.log(x);
    x*=2;
}

//DoWhile Loop
// This is how you get a random number between 50 and 100
var allCones = Math.floor(Math.random() * 50) + 50;

// do {
//
//     console.log()
// // This expression will generate a random number between 1 and 5
// var conesBought = Math.floor(Math.random() * 5) + 1;
// if ((allCones) && (conesBought === 5)) {
//     console.log(conesBought + " cones sold");
// } else if (conesBought < 0) {
//     console.log("I only have " + conesBought + " cones left to sell")
// }
//
// } while(allCones <= 100);