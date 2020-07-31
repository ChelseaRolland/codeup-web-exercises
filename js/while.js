"use strict";

//While loop
var i = 2;

while (i <= 65536) {
    console.log(i);
    i *= 2;
}
//
// //Another way of doing the while loop; counting the iterations
// var k = 2;
// var l = 0;
// while  (l <= 16) {
//     console.log(Math.pow(2), l);
//     l++;
// }
//
// //same as the while loop above just refactored as a for loop
// for (i = 2; i <= 65536; i*=2) {
//     console.log(i);
// }
//
// //try to refactor the for loops into while loops and vice versa

//DoWhile Loop

// This is how you get a random number between 50 and 100
var allCones = Math.floor(Math.random() * 50) + 50;

//This is how you get a random number between 10 and 20;
//var allCones = Math.floor(Math.random() * 10) + 10;

//console.log(allCones);

var conesBought = Math.floor(Math.random() * 5) + 1;

do {
    var conesBought = Math.floor(Math.random() * 5) + 1;

    if (allCones >= conesBought) {
        console.log(conesBought + " cones sold...");
        allCones -=conesBought
    } else {
        console.log("I can't sell you " + conesBought + ". I only have " + allCones + " left to sell.")
    }

} while (allCones > 0);

console.log("Yay! I have sold them all!");

// for (allCones; allCones >= 0; allCones-=conesBought) {
//     if (allCones > conesBought) {
//         console.log(conesBought + " cones sold...");
//     } else if (allCones < conesBought) {
//         console.log("I can't sell you " + conesBought + ". I only have " + allCones + " left to sell.")
//     } else {
//         console.log("Yay! I have sold them all!");
//     }
// }

//instructors recap
// do {
//     var cones = Math.floor(Math.random() * 5) + 1;
//     //decide if we have enough
//     if (cones <= allCones ) {
//         //sell some cones
//         var cones = Math.floor(Math.random() * 5) + 1;
//         console.log(cones + " cones sold...");
//         allCones -= cones;
//     } else {
//         console.log("Cannot sell you " + cones + " cones. I only have " + allCones + " left ...");
//     }
//
//
// } while (allCones > 0);
// console.log("Yay! I sold them all")