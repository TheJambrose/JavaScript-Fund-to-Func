// Exercise
// Translate into ES6

// var increment = function(n){ return n + 1; };
// var square = function(n){ return n*n; };
// var doMathSoIDontHaveTo = function(n, func){ return func(n); };
// doMathSoIDontHaveTo(5, square);
// doMathSoIDontHaveTo(4, increment);


//DONE

// var increment = n => {return n +1};

// var square = n => {return n * n};

// var doMathSoIDontHaveTo = (n, func) => {return func(n)};

// doMathSoIDontHaveTo(5, square);
// //should return 25

// doMathSoIDontHaveTo(4, increment);
// //should return 5


//DONE even more terse

var increment = (n) => n + 1;

var square = (n) => n * n;

var doMathSoIDontHaveTo = (n, func) => func(n);

doMathSoIDontHaveTo(5, square);
//should return 25

doMathSoIDontHaveTo(4, increment);
//should return 5
