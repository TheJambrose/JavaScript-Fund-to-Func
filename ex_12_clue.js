// Exercise
// Implement _.from()
const _ = []


//... spread will capture all addtional arguments provided
 _.from = (...args) => {

 	//using the array prototype to slice the array-like object passed and return it as
 	// an actual array 
  return Array.prototype.slice.call(args);
}



console.log(_.from("one", "two", "three"));
//should log an array ["one", "two", "three"]


console.log(_.from("one", "two", "three").join(" "));
//should log a string "one two three"]