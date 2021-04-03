//Exercise
// using the object check if the suspect was PRESENT the night of the murder

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

const suspectsPresent = _.filter(videoData, function(suspectObject) {
	return suspectObject.present;
})

//test/display the suspextPresent contents
console.log(suspectsPresent);

