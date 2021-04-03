// Exercise: project
// Filter and then map this data structure to get the names of the final suspects to send back to the team:
// http://jsbin.com/duvafoc/edit
//IE we want an array with the list of suspects present

const _ = {};

_.each = function (list, callback) {
	
	// test for array
	if (Array.isArray(list)===true) {
		for (i  = 0; i < list.length; i++) {
			callback(list[i], i, list);
		};
	} else {
		for (key in list) {
			callback(list[key], key, list);
		};
	};
};

_.map = function (list, callback) {
	//create array
	let arr = []

	_.each(list, function(value, i, list) {
		arr.push(callback(value, i, list));
	});


	//return manipulated array
	return arr
};

_.filter = function(list, callback) {
	let arr = []

	_.each(list, function(value, i, list) {

		if (callback(value, i, list) === true) {
			arr.push(value);
		};

	});
	return arr;
};


const videoData = [
    {
        name: 'Miss Scarlet',
        present: true,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': false},
            {library: false}
        ]
    },
    {
        name: 'Mrs. White',
        present: false,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': false},
            {library: false}
        ]
    },
    {
        name: 'Reverend Green',
        present: true,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': false},
            {library: false}
        ]
    },
    {
        name: 'Rusty',
        present: false,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': false},
            {library: false}
        ]
    },
    {
        name: 'Colonel Mustard',
        present: true,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': false},
            {library: false}
        ]
    },
    {
        name: 'Professor Plum',
        present: true,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': false},
            {library: false}
        ]
    }
];


//first filter for present from the videoData



const presentSuspects = _.filter(videoData, function (suspectObjects) {
	return suspectObjects.present === true; 
});


console.log(presentSuspects);




//Map the suspect names form the filtered presentSuspects
// let presentSuspectNames = _.map( presentSuspects, function(suspectDetails) {
// 	return suspectDetails.name;
// });

//now rewrite as an arrow function

let presentSuspectNames = _.map(presentSuspects, suspectDetails => {
	return suspectDetails.name;
});

console.log(presentSuspectNames);
