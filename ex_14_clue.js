// Exercise
// Implement _.reduce()
//from lodash documentation https://lodash.com/docs/4.17.15#reduce
// _.reduce(collection, [iteratee=_.identity], [accumulator])
// Reduces collection to a value which is the accumulated result of running each element in collection thru iteratee, where each successive invocation is supplied the return value of the previous. If accumulator is not given, the first element of collection is used as the initial value. The iteratee is invoked with four arguments:
// (accumulator, value, index|key, collection).

const _ = {};

_.each = function (list, callback) {
  if (Array.isArray(list) === true) {
    for (i = 0; i < list.length; i++) {
      callback(list[i], i, list);
    }
  } else {
    for (key in list) {
      callback(list[key], key, list);
    }
  }
};



_.reduce = function (list, callback, initialValue) {
  var accum = initialValue;
// loop through the list
	_.each(list, function (value, i, list) {
  		//call the cb with arr[i], prev/initialValue
  		//save the return value
      if (accum === undefined) {
        accum = value;
      } else {
        accum = callback(value, accum);
      }
	});

  	//save the return value
    return accum;

//return the single result

};


console.log(
  _.reduce(
    [1, 2],
    function (sum, n) {
      return sum + n;
    },
    0
  )
  );

//should return 3

console.log(
  _.reduce(
    [1, 2, 3],
    function (sum, n) {
      return sum + n;
    },
    
  )
  );

//should return 6 even without an initial value;