(function(){
    "use strict";

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    var planetsArray;

    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */

    planetsArray = planetsString.split('|');

    console.log(planetsArray);

    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?
     *
     * BONUS:
     * Create another string that would display your planets in an undordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */

    // var planetBreakString = planetsArray.join('<br>');
    //
    // console.log(planetBreakString);
    //
    // //Bonus
    //
    // // for (let i = 0; i < planetsArray.length; i++) {
    // //     for (let j = 0; j < planetsArray.length; j++) {
    // //         var planetListString = planetsArray.join('<li>');
    // //         console.log(planetListString);
    // //     }
    // // }
    //
    // var planetListString = planetsArray.join('<li>');
    // console.log(planetListString);
    //
    // var planetListArray = planetListString.split();
    // console.log(planetListArray);
    //
    // var planetUnorderdEnd = planetListArray.push('</ul>');
    // console.log(planetUnorderdEnd);
    // console.log(planetListArray);
    //
    // var planetBeginning = planetListArray.unshift('<ul>');
    // console.log(planetListArray);
    //
    // var planetFinal = planetListArray.join(', ');
    // console.log(planetFinal);


    //var planetUnorderedFirst = planetUnorderedEnd.unshift("<ul>");

    //console.log(planetUnorderedFirst);

})();
