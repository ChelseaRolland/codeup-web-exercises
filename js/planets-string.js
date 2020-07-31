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

    //var planetBreakString = planetsArray.join('<br>');

    //console.log(planetBreakString);

    //Bonus

    // for (let i = 0; i < planetsArray.length; i++) {
    //     planetsArray.splice(planetsArray[i], 0, '<li>', '</li>');
    // }
    // console.log(planetsArray);
        //for (let j = 0; j < planetsArray.length; j++) {
            //var planetListString = planetsArray.join('<li>');
            //console.log(planetListString);
        //}
    //}



    //planetsArray.push("</li>");
    //console.log(planetsArray);

    //planetsArray.unshift("<li>");
    // console.log(planetsArray);
    //
    // var planetListString = planetsArray.join('</li>');
    // console.log(planetListString);
    // //
    // var planetListArray = planetListString.split();
    // console.log(planetListArray);
    // //
    // planetListArray.push("</li>");
    // console.log(planetListArray);
    //
    // planetListArray.unshift("<li>");
    // console.log(planetListArray);
    //
    // var planet1 = planetListArray.join("");
    // console.log(planet1);

    // var planetUnorderdEnd = planetListArray.push('</ul>');
    // console.log(planetUnorderdEnd);
    // console.log(planetListArray);
    //
    // var planetBeginning = planetListArray.unshift('<ul>');
    // console.log(planetListArray);
    //
    // var planetFinal = planetListArray.join(', ');
    // console.log(planetFinal);
    //
    //
    // var planetUnorderedFirst = planetUnorderedEnd.unshift("<ul>");
    //
    // console.log(planetUnorderedFirst);

})();
