// Callbacks - Passing a function to someone else and they will run your code later
// In JS, functions are just objects.
// Therefore... you can pass functions around your code.

// $('.btn').click(function(){ console.log("Click!") });
// // Above, function is an argument (no name method)

// // ================= above is the same as below =================

// var clickFunction = function(){ console.log("Click!") };
// $('.btn').click(clickFunction);

// // Somewhere in jQuery is this ....
// var $ = {};
// $.click = function(callbackToRunLater){
// 	//stuff happens
// 	callbackToRunLater();
// }


// Consider the following...
function x(y){
	return function(z){
		console.log(y + z);
	}
}
x(2)(3)
// How can you make this work?
// The only way is if x RETURNS a function. That function will take a parameter.
// Higher order function = a function that gets passes around.


// ===========================

function print(thingToPrint){
	console.log(thingToPrint);
}

// The print function doesn't need to be passed around because we have access to it locally.
// Think Blackjack. Deal was a utility function -- we called it when we needed it.

function b(number){
	let localNum = number * number;
	// Call the print function above
	print(localNum);
}

function c(theString){
	let localString = theString + " is what was passed";
	console.log(localString);
}

b(2);
c("Test");

// Could alsomake print a prototype of a constructor.
// BUT... what if we didn't have access to the code that needed to run our code
// i.e. What if we didn't have access to that code

var a = function(theVar){
	console.log(theVar);
}

var b = function(number, callback){
	let localNum = number * number;
	callback(localNum);
}

b(3, function(number){ console.log(number)} );
b(3, a);


// ==============================


// This is like a for loop but cleaner (although for loops are faster)
var students = ['Rissa', 'Merilee', 'Chris', 'Stephen'];
students.map((student, index)=>{
	console.log(student);
});

// Array.prototype.map


