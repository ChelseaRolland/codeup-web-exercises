"use strict";

$(document).ready(function() {
    console.log('Ready to go!');

    $(document).keyup(function (event) {
        console.log(event.keyCode);

        //Need to create a code for the input of the correct Konami Codes

        //List out the variables
        let konamiCode = [38,38,40,40,37,39,37,39,66,65,13];
        let count = 0;
        let userInput = event.keyCode;
        let start = false;

        //If the code input has started
        if (!start) {
            if (userInput === konamiCode[count]) {
                start = true;
                // count++;
                console.log("Lets go!")
            }
        }

        //Once the input has started and  //Comparing the Userinput to the Actual Konami Code
        if (start) {

            //Comparing the userinput to the konami code
            if (userInput === konamiCode[count]){
                console.log('You doing right!');
                count++;
            } else {
                reset();
            }
            //Tell the user they got the correct code
            if (count === konamiCode.length) {
                console.log("You did it!")
                youWon();
            }

        } else {
            reset();
        }

        function reset() {
            start = false;
            count = 0;
        }

        function youWon() {
            $('body').css('background-color', 'grey');
        }

    });

});