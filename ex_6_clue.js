//  Exercise

// Complete the rest of this function so that it works as described in the previous slides:

// Define your _.each, iteration function

const _ = {};

_.each = function (list, callback) {
	//check if the list is an Array
	if (Array.isArray(list)) {
		for (var i = 0; i < list.length; i++) {
			callback(list[i], i, list);
		}
	} else {
		for (key in list) {
			callback(list[key], key, list);
		}
	}
}


function CreateSuspectObjects(name) { 
  return { 
    name: name,   
    color: name.split(' ')[1],   
    speak() {console.log(`my name is ${name}`);}
  }; 
}; 


var suspects = ['Miss Scarlet', 'Colonel Mustard', 'Mr. White']; 

var suspectsList = [];

// Use your _.each to replicate this for loop.

// for(var i = 0; i < suspects.length; i++){ 
//   suspectsList.push(CreateSuspectObjects(suspects[i])); 
// }



_.each(suspects, function(suspects) {
	suspectsList.push(CreateSuspectObjects(suspects));
});


//confirm array of objects exist by having each one call their speak() method.
_.each(suspectsList, function(suspectsList) {
	suspectsList.speak();
});