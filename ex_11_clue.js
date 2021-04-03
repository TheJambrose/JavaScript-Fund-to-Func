// Exercise
// write this function in ES5

// const add = function(a , b = 2){
//    console.log(arguments); //logs [3]
//    return a + b; 
// };
// add(3); //5??

const add = function (a, b) {
	defaultB = 2;

	if (b === undefined) {
		return a + defaultB;
	} else {
		return a + b;
	};

};

console.log(add(3))
console.log(add(3, 3))