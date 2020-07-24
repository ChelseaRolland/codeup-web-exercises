"use strict";

console.log("message:", "Hello from external Javascript");

alert("Welcome to my website!");

var userInput = prompt("What is your favorite color?");
console.log("message", "Awesome, " + userInput + " is my favorite color too!");

alert("Great, " + userInput + " is my favorite color too!");
console.log("message", "Responding to the answer");

//Exercise 3: Question 1
alert("You will be renting movies for your children. Please let us know how many days you will be keeping each movie.")

//Making the variable string output into numbers
var mermaid = prompt("How many days will you be renting the movie: Little Mermaid?");
console.log(typeof mermaid);
var mermaidNum = Number(mermaid);
console.log(typeof mermaidNum);

var bear = prompt("How many days will you be renting the movie: Brother Bear");
console.log(typeof bear);
var bearNum = Number(bear);
console.log(typeof bearNum);

var herc = prompt("How many days will you be renting the movie: Hercules?");
console.log(typeof herc);
var hercNum = Number(herc);
console.log(typeof hercNum);

var subtotal = mermaidNum + bearNum + hercNum;
console.log(typeof subtotal);

var pricePerDayConfirmed = confirm("Each movie cost $3 per day. Do you wish to continue?");
console.log("note:", "Asking if they want to pay $3/day for these movies.");

//Determining how much it will cost to rent the listed above movies
var total = subtotal * 3;
console.log(typeof total);

alert("Thank you for your selection. Your total for these movies will be $" + total + ".");


//Exercise 3: Question 2
alert("Congrats! You have done excellent work for the big three: Google, Amazon, and Facebook! Now we need your help in tracking the amount of hours your have worked! So you can get PAID!!!");

//Making the variable string output into numbers
var googleRate = prompt("What is the hourly rate for Google?");
var googleRateNum = Number(googleRate);
var googleHrs = prompt("How many hours did you work at Google this week?");
console.log(typeof googleHrs);
var googleHrsNum = Number(googleHrs);
console.log(typeof googleHrsNum);


var amazonRate = prompt("What is the hourly rate for Amazon?");
var amazonRateNum = Number(amazonRate);
var amazonHrs = prompt("How many hours did you work at Amazon this week?");
console.log(typeof amazonHrs);
var amazonHrsNum = Number(amazonHrs);
console.log(typeof amazonHrsNum);

var facebookRate = prompt("What is the hourly rate for Facebook?");
var facebookRateNum = Number(facebookRate);
var facebookHrs = prompt("How many hours did you work at Facebook this week?");
console.log(typeof facebookHrs);
var facebookHrsNum = Number(facebookHrs);
console.log(typeof facebookHrsNum);


//Determining how much this person will make this week from the given inputted hours
var weeklyPay = (googleHrsNum*googleRateNum) + (amazonHrsNum*amazonRateNum) + (facebookHrsNum*facebookRateNum);
alert("Congrats! You have been paid $" + weeklyPay + " this week!");


//Exercise 3: Question 3
// enrolled = class not full && class scheduled does not conflict with current schedule

alert("Welcome to your 1st day of class. We hope you enjoy yourself this semester!");
var studentInput = prompt("How many people are in your class?");
console.log(typeof studentInput);

var studentsNum = Number(studentInput);
console.log("message:", "How many people are in the class?")
var classFull = studentsNum <= 30;

var studentSchedule = confirm("Is your scheduled \"Mon, Wed, and Fri?");
console.log(studentSchedule);
console.log(typeof studentSchedule);

//Determining if the status of the students requirements
var studentClassChoice = classFull && studentSchedule;

alert("Will this student be able to attend this class: " + studentClassChoice + ".");


//Exercise 4: Question 4
// product offer = (person buys more than 2 items and offer has not expired) || (premium members and offer not expired)
alert("Welcome to the Sunshine and Peace Sundries. We love having you hear with us. We have some sweet new deals this week.")

var premiumMembership = confirm("Do you have a premium membership?")
console.log(premiumMembership);
console.log(typeof premiumMembership);

//Is the offer still available
var productExpired = confirm("Has the offer expired?");
console.log(productExpired);
console.log(typeof productExpired);

var itemsInput = prompt("How many items do you have?");
var itemsNum = Number(itemsInput);

//Comparing the amount of items the user has
var itemLimit = itemsNum >= 2;
console.log(itemLimit);
console.log(typeof itemLimit);

var productOffer = (premiumMembership || itemLimit) && !productExpired;
console.log("note:", "testing the boolean if user meets the requirements for product offer")

alert("Do you get the product offer? " + productOffer);


