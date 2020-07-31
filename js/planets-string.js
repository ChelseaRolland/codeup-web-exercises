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

    var planetBreakString = planetsArray.join('<br>');

    console.log(planetBreakString);

    //Bonus

    var planetList = [];
    planetsArray.forEach(function (planet) {
        console.log(planet);
        planetList.push("<li>" + planet + "</li>");
        planet++;
    })

    //For Loop example below

    // for (let i = 0; i < planetsArray.length; i++) {
    //     planetList.push("<li>" + planetsArray[i] + "</li>");
    //     console.log(planetList);
    // }

    console.log(planetList);

    planetList.unshift("<ul>");
    // //console.log(planetList);

    planetList.push("</ul>");
    // //console.log(planetList);

    var planetFinalString = planetList.join('');
    console.log(planetFinalString);


})();
