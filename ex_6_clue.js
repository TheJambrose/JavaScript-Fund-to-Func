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

// testerArray = ["test 1", "test 2", "test 3"];
// testerObject = {value1: "test 1", value2: "test 2", value3: "test 3"};

// _.each(testerArray, console.log);

// _.each(testerObject, console.log);

function CreateSuspectObjects(name) {
  return {
    name: name,
    color: name.split(' ')[1], 
      //should be 1, not 2. Previous slide was a trick!
    speak() { 
      console.log("my name is ", name); 
    },
  };
};

var suspects = ['Miss Scarlet', 'Colonel Mustard', 'Mr. White'];

var suspectsList = [];

//create the Suspect Objects

_.each(suspects, function() {
	suspectsList.push(CreateSuspectObjects(suspects));
})


// for(var i = 0; i < suspects.length; i++){ 
//   suspectsList.push(CreateSuspectObjects(suspects[i])); 
//   console.log("i ran");
// }