"use strict";

$(document).ready(function() {
    console.log('Ready to go!');

    $(document).keyup(function (event) {
        console.log(event.keyCode);

        //Need to create a code for the input of the correct Konami Codes

        //List out the variables
        let konamiCode = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65, 13];
        let count = 0;
        let userInput = event.keyCode;
        let start = false;

        //If the code input has started
        if (!start) {
            if (userInput === konamiCode[count]) {
                start = true;
            }
        }

        //Once the input has started and is correct

        //Comparing the Userinput to the Actual Konami Code



    });

});