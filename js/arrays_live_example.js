"use strict";

var outerSpace = ["Io", "Europa", "Ganyamede", "Titan", "Enceladus"];

var fun = function () {console.log("Hello")};
var stuff = [7,9, 13, Math.PI, true, fun, [1,2,3], outerSpace]
// console.log(stuff);
// stuff[5](); //to call a function from inside of an array

// console.log(stuff[0]);
// console.log(stuff[1]);
// console.log(stuff[2]);

var empty = [];

var arr1 = [1,2,3];
var arr2 = [4,5,6];

var arr3 = arr1.concat(arr2);
// console.log(arr3);

//Iteratin Array - For Loop

//for (initial variable; condition; iteration) {
    //body statement here
// }


// for (var i = 0; i < array.length; i++) {
//     console.log(array[i]);
// }

var words = ["coding", "is", "fun", "at", "codeup"];
var sentence = "";
// for (var i = 0; i < words.length; i++) {
//     sentence += words[i];
//     if (i < words.length - 1) {
//         sentence += " ";
//     } else {
//         sentence += "!"
//     }
// }

words.forEach(function(word, i, arr) {
    // console.log(word);
    // console.log(i);
    // console.log(arr);
    sentence += word;
    if (i < arr.length - 1) {
        sentence += " ";
    } else {
        sentence += "!";
    }
})

console.log(sentence);

var studentName = function(student) {
    console.log(student)
}
