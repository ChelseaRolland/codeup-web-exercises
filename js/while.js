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
//console.log(allCones);

do {
    var conesBought = Math.floor(Math.random() * 5) + 1;
    //console.log(conesBought);

    //var conesRemaining = allCones - conesBought
    //console.log(conesRemaining);

    if (allCones > conesBought) {
        console.log(conesBought + " cones sold...");
    } else if (allCones < 0) {
        console.log("I can't sell you " + conesBought + ". I only have " + allCones + " left to sell.");
    } else if (allCones === 0) {
        console.log("Yay! I have sold them all!")
    }
    // } else {
    //     console.log("I can't sell you " + conesBought + ". I only have " + allCones + " left to sell.");    }
    //console.log("I can't sell you " + conesBought + ". I only have " + allCones + " left to sell.");
    //console.log("I can't sell you " + conesBought + ". I only have " + allCones + " left to sell.");

    // if(allCones > conesBought) {
    //     console.log(conesBought + " cones sold");
    // } else if(allCones === 0) {
    //     console.log("Yay! I have sold them all!")
    // }
    // //else if (allCones < conesBought) {
    //     console.log(("I can't sell you " + conesBought + ". I only have " + allCones + " left to sell."));
    // }

    // allcones -= conesBought;
    // if (allCones > 0) {
    //     console.log("We still have " + allCones + " left to sell!")
    // } else if (allCones === 0) {
    //     console.log("We are completely out of cones!")
    // } else {
    //     console.log("I do not have anymore cones")
    // }
} while (allCones > 0);
//while (allCones >= 0)

// This expression will generate a random number between 1 and 5
// var conesBought = Math.floor(Math.random() * 5) + 1;
// if ((allCones) && (conesBought === 5)) {
//     console.log(conesBought + " cones sold");
// } else if (conesBought < 0) {
//     console.log("I only have " + conesBought + " cones left to sell")
// }
//
// } while(allCones <= 100);