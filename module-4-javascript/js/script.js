// *******************************
// START HERE IF YOU WANT A MORE CHALLENGING STARTING POINT FOR THIS ASSIGNMENT
// *******************************
//
// Module 4 Assignment Instructions.
//
// The idea of this assignment is to take an existing array of names
// and then output either Hello 'Name' or Good Bye 'Name' to the console.
// The program should say "Hello" to any name except names that start with a "J"
// or "j", otherwise, the program should say "Good Bye". So, the final output
// on the console should look like this:
/*
Hello Yaakov
Good Bye John
Good Bye Jen
Good Bye Jason
Hello Paul
Hello Frank
Hello Larry
Hello Paula
Hello Laura
Good Bye Jim

WARNING!!! WARNING!!!
The code does NOT currently work! It is YOUR job to make it work
as described in the requirements and the steps in order to complete this
assignment.
WARNING!!! WARNING!!!

*/

// STEP 1:
// Wrap the entire contents of script.js inside of an IIFE
// See Lecture 52, part 2
// (Note, Step 2 will be done in the SpeakHello.js file.)


(
    function () {
        var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

        // STEP 10:
        // Loop over the names array and say either 'Hello' or "Good Bye"
        // using the 'speak' method or either helloSpeaker's or byeSpeaker's
        // 'speak' method.
        // See Lecture 50, part 1
        for (var i = 0; i < names.length; i++) {
        
          // STEP 11:
          // Retrieve the first letter of the current name in the loop.
          // Use the string object's 'charAt' function. Since we are looking for
          // names that start with either upper case or lower case 'J'/'j', call
          // string object's 'toLowerCase' method on the result so we can compare
          // to lower case character 'j' afterwards.
          // Look up these methods on Mozilla Developer Network web site if needed.
          var firstLetter = names[i].charAt(0).toLowerCase();
        
          // STEP 12:
          // Compare the 'firstLetter' retrieved in STEP 11 to lower case
          // 'j'. If the same, call byeSpeaker's 'speak' method with the current name
          // in the loop. Otherwise, call helloSpeaker's 'speak' method with the current
          // name in the loop.
          if (firstLetter === "j") {
            byeSpeaker(names[i]);
          } else {
            helloSpeaker(names[i]);
          }
        }        
    }
)();


// function Dog(name) {
//     this.name = name;
//   }
  
//   Dog.prototype.bark = function () {
//     console.log(this.name + " likes barking! Bark!");
//   }
  
//   var max = new Dog("Max", "Buddy");
//   max.bark();

// function Rect (width, height) {
//     this.width = width;
//     this.height = height;
// }

// Rect.prototype.getArea = function () {
//     return this.width * this.height;
// }

// var rect1 = new Rect(2, 3);
// var rect2 = new Rect(4, 5);
// console.log("Area of rect1 = " + rect1.getArea());
// console.log("Area of rect2 = " + rect2.getArea());

// var rect3 = rect1;
// console.log(rect3);

// rect3.height = 7;
// console.log("Area of rect3 = " + rect3.getArea());
// console.log("Area of rect1 = " + rect1.getArea());


// var x = 10;
// if ( (null) || (console.log("Hello")) || x > 5 ) {
//   console.log("Hello");
// }

// var string = "Hello";
// string += " World";
// console.log(string + "!");

// if (4 == 4) {
//     console.log("4 == 4");
// }

// if ("4" == 4) { //type coersion
//     console.log("'4' == 4");
// }

// if ("4" === 4) {// strict equality
//     console.log("'4' === 4");
// } else {
//     console.log("'4' is not equal to 4");
// }

// var x;
// console.log(x);

// if (x == undefined) {
//     console.log("x is undefined");
// }

// x = 5;
// if (x == undefined) {
//     console.log("x is undefined");
// } else {
//     console.log("x is defined and equal to " + x);
// }


// var message = "in global";
// console.log("global: message = " + message);

// function a() {
//     var message = "inside a";
//     console.log("a: message = " + message);
//     b();    
// }

// function b() {
//     console.log("b: message = " + message);
// }

// a();