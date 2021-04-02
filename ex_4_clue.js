// Exercise
// Loop through all the properties of the suspect objects in the suspects array, mark them if you think they are guilty.

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


//function to add a guilt key value
function innocentTilGuilty(game) {
	for (let suspect in game.suspects) {
		game.suspects[suspect].guilt = false;
	}
}

innocentTilGuilty(game);

// function to declare a suspect to have a guilty value of true
// assumes no duplicate names provided.

function guilty(gameObject, guiltySuspectName) {
	for (let suspect of game.suspects) {
		if (suspect.name == guiltySuspectName) {
			suspect.guilt = true;
		}
	}
}

guilty(game, "Rusty");
console.log(game);

innocentTilGuilty(game);
console.log(game);

guilty(game, "Miss Scarlet");
console.log(game);