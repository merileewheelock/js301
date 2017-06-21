// PROMISES
// Are a way to manage async without passing zillions of callback functions around or nesting them to no end.
// i.e. this...
// connection.query(query1, (results1)=>{
// 	connection.query(query2, (results2)=>{
// 		connection.query(query3, (results3)=>{
// 			connection.query(query4, (results4)=>{
// 				// This is the one that is syncronous
// 			});
// 		});
// 	});
// });

// connection.query(query1){
// 	// do some stuff
// 	// call function I got from earlier and pass it what I just got from result
// 	// call function I got from earlier and pass it this result
// 	// call function I got from earlier and pass it ...
// }

// function successCallback(result){
// 	console.log("Success: "+result);
// }
// function failureCallback(result){
// 	console.log("Failure: "+error);
// }

// function checkName(name,winning,losing){
// 	// setTimeout(function(){});
// 	if (name == "Rob"){
// 		winning("Name is Rob");
// 	}else{
// 		losing("Sorry, not Rob");
// 	}
// }
// checkName("Rob", successCallback, failureCallback);


// What is a promise?
// It is just a JS constructor that gives you a few methods:
// - all
// - race
// - reject
// - resolve
// - then

// let myFirstPromise = new Promise((resolve,reject)=>{
// 	// resolve and reject are callbacks
// 	// we will run resolve when we are done with our async stuff
// 	// we will run reject if it failed
// 	// setTimeout will stand in as an AJAX or sql request
// 	setTimeout(function(){
// 		resolve("Success!");
// 	},2000);
// });

// console.log(myFirstPromise); // Print pending
// myFirstPromise.then((successMessage)=>{
// 	console.log(successMessage); // Success!
// 	console.log(myFirstPromise); // Print Success
// });



function one(){
	return new Promise((resolve, reject)=>{
		setTimeout(()=>{
			resolve("4 seconds have passed")
		}, 4000);
	});
}

function two(){
	return new Promise((resolve, reject)=>{
		setTimeout(()=>{
			resolve("2 seconds have passed")
		}, 2000);
	});
}

var promiseOne = one();
var promiseTwo = two();
// console.log(promiseOne); // Promise pending
// promiseOne.then((successMsg)=>{
// 	console.log(successMsg); // After 4 seconds pass, promise is resolved
// });
// promiseTwo.then((successMsg)=>{
// 	console.log(successMsg); // After 2 seconds pass, promise is resolved
// });

var promises = []; // promises is an array of two pending promises
promises.push(promiseOne);
promises.push(promiseTwo);

// All will wait until every promise in the array has resolved.
// It will have an array of each argument passed to each resolve.
Promise.all(promises).then((data)=>{
	console.log("All done.");
	console.log(data);
});

Promise.race(promises).then((data)=>{
	console.log("Someone is done.");
	console.log(data);
})


