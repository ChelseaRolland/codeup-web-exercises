"use strict";

$(document).ready(function(){
    console.log('Ready to go!');

    var codes = [38,38,40,40,37,39,37,39,66,65,13];
    var position = ['up', 'up', 'down', 'down', 'left', 'right', 'left', 'right', 'b', 'a', 'enter'];

    console.log(codes.length)

    $('#test-field').keydown(function (event){
        // let codeArray = [];
        // codes.forEach(function (code) {
        //     if (code === event.keyCode) {
        //         codeArray.push(event.keyCode)
        //     } else if (position.includes((event.key).toLowerCase())){
        //         codeArray.push(event.keyCode)
        //     } else {
        //         console.log("This is not the correct code")
        //     }
        //         });
        // console.log(codeArray);

        // let codeArray = [];
        // codes.forEach(function (code) {
        //     if (code === event.keyCode) {
        //         // codeArray.push(event.keyCode)
        //         $('#result').append(event.key, event.keyCode)
        //     } else {
        //         console.log("This is not the correct code")
        //     }
        // });
        // console.log(codeArray);
        // $('#result').append(event.key)
        if (event.keyCode === codes[0]) {
            console.log('Up')
        }
        // if (event.keyCode === codes[1]) {
        //     console.log('Your off to a good start')
        // }
        if (event.keyCode === codes[2]) {
            console.log('Down')
        }
        // if (event.keyCode === codes[3]) {
        //     console.log('Your off to a good start')
        // }
        if (event.keyCode === codes[4]) {
            console.log('Left')
        }
        if (event.keyCode === codes[5]) {
            console.log('Right')
        }
        // if (event.keyCode === codes[6]) {
        //     console.log('Your off to a good start')
        // }
        // if (event.keyCode === codes[7]) {
        //     console.log('Your off to a good start')
        // }
        if (event.keyCode === codes[8]) {
            console.log('B')
        }
        if (event.keyCode === codes[9]) {
            console.log('A')
        }
        if (event.keyCode === codes[10]) {
            alert("You got the Konami Code! You get 30 extra lives!")
        }

        // alert("You got the Konami Code! You get 30 extra lives!")

        switch (event.keyCode) {
            case 38:
                console.log('UP');
                break;
            case 40:
                console.log('DOWN');
                break;
            case 37:
                console.log('LEFT');
                break;
            case 39:
                console.log('RIGHT');
                break;
            case 66:
                console.log('B');
                break;
            case 65:
                console.log('A');
                break;
            case 13:
                console.log("You got the Konami Code! You get 30 extra lives!");
                alert("You got the Konami Code! You get 30 extra lives!");
                break;
            default:
                console.log("This is not a cheat code");
        }

    })

    });


// });







// var code = [38,38,40,40,37,39,37,39,66,65,13];
// var position = ['up', 'up', 'down', 'down', 'left', 'right', 'left', 'right', 'b', 'a', 'enter'];

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