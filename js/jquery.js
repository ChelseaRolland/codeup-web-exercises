"use strict";

$(document).ready(function(){
    console.log('Ready to go!')
});

var code = [38,38,40,40,37,39,37,39,66,65,13];
var position = ['up', 'up', 'down', 'down', 'left', 'right', 'left', 'right', 'b', 'a', 'enter'];



// // var konamiCode = ['ArrowUp', 'ArrowUp','ArrowDown','ArrowDown','ArrowLeft','ArrowRight','ArrowLeft','ArrowRight',66,65,13];
//
// $('#test-field').on('keyup', function (event) {
//     console.log('key: ' + event.key);
//     console.log('key-code: ' + event.keyCode);
//     // console.log(typeof event.key);
//     // console.log(typeof event.keyCode);
//     // console.log(typeof konamiCode[0]);
//     // var konamiCode = [38,38,40,40,37,39,37,39,66,65,13];
//
//     let finalArray = [];
//
//     for (let i = 0; i < konamiCode.length; i++) {
//         // let finalArray = [];
//         if (konamiCode[i] === event.keyCode) {
//           finalArray.push(event.keyCode)
//         } // else if (konamiCode[i] === event.key) {
//         //     finalArray.push(event.key);
//         // }
//         else {
//             console.log('This is not the correct code!');
//         }
//     } return finalArray;
// })

// function checkCode() {
//     let finalArray = [];
//     konamiCode.forEach(function(code){
//         if (code === event.keyCode) {
//             finalArray.push(code);
//         } else {
//             console.log('This is not the correct code!');
//         }
//     });
//     return finalArray;




// console.log(checkCode());
//
// $('#test-field').on('keyup', checkCode);