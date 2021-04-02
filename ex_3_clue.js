// Exercise: 
// Loop through the suspects array

const game = {
    'suspects': [
        {
            name: "Rusty",
            color: "orange"
        }, {
            name: "Miss Scarlet",
            color: "red"
        }
    ]
}

function susLoop(game) {
	for (suspect of game.suspects) {
		console.log(suspect);
		console.log("Jambrose's ran right!");
	};
};


susLoop(game);