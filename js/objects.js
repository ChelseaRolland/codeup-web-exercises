(function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */


    //Q1
    var person = {
        firstName: "Chelsea",
        lastName: "Rolland"
    }

    console.log('name object:', person.firstName + " " + person.lastName);

    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */

    //Q2
    person.sayHello = function () {
        console.log(this.firstName + " " + this.lastName + " says hello!");
    }

    console.log(person);
    console.log(person.sayHello());

    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    //Q3
    var shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];

    function discountChecker(shoppers) {
        shoppers.forEach(function (shopper) {
            if (shopper.amount >= 200) {
                var discount = (shopper.amount * .12).toFixed(2);
                var finalDiscount = shopper.amount - (discount);
                console.log('H.E.B. Offer: ', + shopper.name + ". Amount before discount: $" + (shopper.amount).toFixed(2) + ". They qualify for the 12% discount, which will be - discount: $" + discount + ". Final total will be: $" + finalDiscount.toFixed(2) + ".");
            } else {
                console.log("You do not receive the discount. Your final total is $" + shopper.amount.toFixed(2))
            }
        });
    }

    discountChecker(shoppers);

    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */

    //Q4
    var books = [
        {title: "Naruto", author: {firstName: "Masashi", lastName: "Kishimoto"}},
        {title: "Bleach", author: {firstName: "Tite", lastName: "Kubo"}},
        {title: "Harry Potter", author: {firstName: "J.K", lastName: "Rowling"}},
        {title: "Let the Cycle Be Unbroken", author: {firstName: "Mariamba", lastName: "Ali"}},
        {title: "1984", author: {firstName: "George", lastName: "Orwell"}}
    ]

        console.log(books[0].title);
        console.log(books[0].author.firstName);
        console.log(books[0].author.lastName);

    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */

    //Q5
    books.forEach(function (book) {
        console.log("Book # " + (books.indexOf(book) + 1));
        console.log("Title: " + book.title);
        console.log("Author: " + book.author.firstName + " " + book.author.lastName);
        console.log("---");
    });

    function loggingBooks(booksArray){
        for (let i = 0; i < booksArray.length; i++) {
            var book = booksArray[i];
            console.log("Book # " + (i + 1));
            console.log("Title: " + book.title);
            console.log("Author: " + book.author.firstName + " " + book.author.lastName);
            console.log("---");
        }
    }

    loggingBooks(books);

    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * -
     * Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */


    //BONUS


    //B.1
    function createBook (title, authorFirstName, authorLastName, booksArray) {
        //booksArray --> the array we are pushing the info to
        var newBook = {
            title: title,
            author: {
                firstName: authorFirstName,
                lastName: authorLastName
            }
        }
        booksArray.push(newBook);
        return booksArray;
    }
    createBook("Bacon", "Mac", "Millan", books);
    loggingBooks(books);

    //B.2
    function showBookInfo(booksArray){
        for (let i = 0; i < booksArray.length; i++) {
            var book = booksArray[i];
            console.log("Book # " + (i + 1));
            console.log("Title: " + book.title);
            console.log("Author: " + book.author.firstName + " " + book.author.lastName);
            console.log("---");
        }
    }

    showBookInfo(createBook("Butterfly", "Dude", "Freedom", books));


})();
