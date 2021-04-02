// Exercise 
// Destructure this nested data structure into two variables with the strings 'red' and 'orange'.


var suspects = [
        {
            name: "Rusty",
            color: "orange"
        }, {
            name: "Miss Scarlet",
            color: "red"
        }
    ]

let [colorOne, colorTwo] = [suspects[0].color, suspects[1].color];

console.log(`colorOne: ${colorOne}, colorTwo: ${colorTwo}`);