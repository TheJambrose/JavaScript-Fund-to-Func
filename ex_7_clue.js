

//Define the _.each() function
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

// Use _.each to build _.map() function

_.map = function (list, callback) {
	var arr = []; //map creates a new array

	if (Array.isArray(list)) {
		for (var i = 0; i < list.length; i++) {
			arr.push(callback(list[i], i, list));
		};
	} else {
		for (key in list) {
			arr.push(callback(list[key], key, list));
		};
	};

	return arr; //map returns the new array
};


const weapons = ['candlestick', 'lead pipe', 'revolver'];

const makeBroken = function (item) {
	return `broken ${item}`;
};


const brokenWeapons = _.map(weapons, makeBroken);

//check if weapons are now broken
_.each(brokenWeapons, function(brokenWeapons) {
	console.log(brokenWeapons);
});