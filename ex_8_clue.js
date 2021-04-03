//Exercise
//Build a _.filter function

const _ = {};

_.each = function (list, callback) {
	//check if the list is an Array
	if (Array.isArray(list)) {
		for (var i = 0; i < list.length; i++) {
			callback(list[i], i, list);
		};
	} else {
		for (key in list) {
			callback(list[key], key, list);
		};
	};
;};



// Done with an example for loop
// _.filter = function (list, callback) {
// 	let arr = [];

// 	for (let i = 0; i < list.length; i++) {
// 		if (callback(list[i], i, list) === true) {
// 			arr.push(list[i]);
// 		};
// 	};
// 	return arr;
// };


//now make _.filter with an _.each mwahahahaha

_.filter = function(list, callback) {
	//intialize new array
	let arr = [];

	//itterate through the provided list
	_.each(list, function (value, i, list) {

		//check if callback evals to true
		if (callback(value, i, list) === true) {

			//if true push the list item into the new array
			arr.push(value);
		};
	});

	//return the new array
	return arr;
};


//test the _.filter
var evens = _.filter([1, 2, 3, 4, 5, 6], function(num){ 
	return num % 2 == 0; 
});

console.log(evens);