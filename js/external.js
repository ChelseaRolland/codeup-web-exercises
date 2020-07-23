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
console.log("note", "Asking if they want to pay $3/day for these movies.");

//Determining how much it will cost to rent the listed above movies
var total = subtotal * 3;
console.log(typeof total);

alert("Thank you for your selection. Your total for these movies will be $" + total + ".");

//Exercise 3: Question 2
alert("Congrats! You have done excellent work for the big three: Google, Amazon, and Facebook! Now we need your help in tracking the amount of hours your have worked! So you can get PAID!!!");

var googleRate = 400;
var amazonRate = 380;
var facebookRate = 350;

var weekPayMessage = confirm("Please confirm if the associated rates are correct for each company: Google: $400/hr, Amazon: $380/hr, Facebook: $350/hr.");
console.log("note","Just confirming if the hourly wages are correct");

//Making the variable string output into numbers
var googleHrs = prompt("How many hours did you work at Google this week?");
console.log(typeof googleHrs);

var googleHrsNum = Number(googleHrs);
console.log(typeof googleHrsNum);

var amazonHrs = prompt("How many hours did you work at Amazon this week?");
console.log(typeof amazonHrs);

var amazonHrsNum = Number(amazonHrs);
console.log(typeof amazonHrsNum);

var facebookHrs = prompt("How many hours did you work at Facebook this week?");
console.log(typeof facebookHrs);

var facebookHrsNum = Number(facebookHrs);
console.log(typeof facebookHrsNum);

//Determining how much this person will make this week from the given inputted hours
var weeklyPay = (googleHrsNum*googleRate) + (amazonHrsNum*amazonRate) + (facebookHrsNum*facebookRate);
alert("Congrats! You have been paid $" + weeklyPay + " this week!");

//Exercise 3: Question 3
alert("Welcome to your 1st day of class. We hope you enjoy yourself this semester!");
var students = prompt("How many people are in your class?");
console.log(typeof students);

var studentsNum = Number(students);
console.log("message:", "How many people are in the class?")
var classFull = studentsNum <= 30;

var studentSchedule = confirm("Is your scheduled \"Mon, Wed, and Fri?");
console.log(studentSchedule);
console.log(typeof studentSchedule);

//Stating the conflict of the schedule
var studentConflict = !studentSchedule;

//Determining if the status of the students requirements
var studentClassChoice = (classFull && (studentSchedule || studentConflict))

alert("Will this student be able to attend this class: " + studentClassChoice + ".");

//Exercise 4: Question 4