(function() {
    "use strict";

    /**
     * TODO:
     * Create an array of 4 people's names and store it in a variable called
     * 'names'.
     */

    var names = ['Chelsea', 'Corvell', 'Alania', 'Nirvana'];

    //===========================================================================

    var moons = ["Europa", "Io", "Ganymede", " Callisto", "Titan", "Enceladus"];

    /**
     * TODO:
     * Create a log statement that will log the number of elements in the names
     * array.
     */

    console.log(names.length);

    //==========================

    console.log(moons.length);

    /**
     * TODO:
     * Create log statements that will print each of the names individually by
     * accessing each element's index.
     */

    console.log(names[0]);
    console.log(names[1]);
    console.log(names[2]);
    console.log(names[3]);

    // ==========================

    console.log(moons[0]);
    console.log(moons[1]);
    console.log(moons[2]);
    console.log(moons[3]);
    console.log(moons[4]);
    console.log(moons[5]);

    /**
     * TODO:
     * Write some code that uses a for loop to log every item in the names
     * array.
     */

    for (let i = 0; i < names.length; i++) {
        console.log(names[i]);
    }

    //==============================================

    for (let i = 0; i < moons.length; i++) {
        console.log(moons[i]);
    }

    /**
     * TODO:
     * Refactor your above code to use a `forEach` loop
     */

    names.forEach(function (name) {
        console.log(name);
    })

    //======================================

    moons.forEach(function (moon) {
        console.log(moon);
    })

    /**
     * TODO:
     * Create the following three functions, each will accept an array and
     * return an an element from it
     * - first: returns the first item in the array
     * - second: returns the second item in the array
     * - last: returns the last item in the array
     *
     * Example:
     *  > first([1, 2, 3, 4, 5]) // returns 1
     *  > second([1, 2, 3, 4, 5]) // returns 2
     *  > last([1, 2, 3, 4, 5]) // return 5
     */

    function first(arrays) {
        console.log(arrays[0]);
    }

    //const first = function(arr) {
       // return arr[0]
    //}

    //console.log(first([1,2,3,4,5]));

    first([1,2,3,4,5]);

    function second (arrays) {
        console.log(arrays[1]);
    }

    //const second = function(arr) {
    // return arr[1]
    //}

    //console.log(second([1,2,3,4,5]));

    second([1,2,3,4,5]);

    function last (arrays) {
        //console.log(arrays[4])
         let lastElement = arrays[arrays.length - 1];
         console.log(lastElement);
    }

    //const last = function(arr) {
    // return arr[arr.length - 1];
    //}

    last([1,2,3,4,5]);
    //console.log(last(names));

})();
