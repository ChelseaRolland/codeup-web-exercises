"use strict";

$(document).ready(function() {
    console.log('Ready to go!');

    //Listing out variables
    let konamiCode = [38,38,40,40,37,39,37,39,66,65,13];
    let count = 0;

    $(document).keyup(function (event) {
        console.log(event.keyCode);

        //list out the userinput
        let userInput = event.keyCode;

        //Once the input has started and  //Comparing the Userinput to the Actual Konami Code

        //Comparing the userinput to the konami code
        if (userInput === konamiCode[count]){
            console.log('You doing right!');
            count++;
        } else { //if this is not the same then it will reset the entire code
            reset();
        }
        //Tell the user they got the correct code
        if (count === konamiCode.length) {
            console.log("You did it!")
            youWon();
        }

        function reset() {
            count = 0;
        }

        function youWon() {
            $('body').css('background-color', 'grey');
            $('#congrats-gif').addClass('congrats-gif');
        }

    });

});