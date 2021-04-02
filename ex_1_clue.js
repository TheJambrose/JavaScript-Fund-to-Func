// Exercise
// Create an object using bracket and dot notation that represents the characters and related data you may find in a game of Clue. 
//Create Rooms, weapons, characters
//weapons = Candlestick Dagger Lead Pipe Revolver Rope Wrench 
//Rooms = Kitchen Ballrooom Conservatory Billard Room Library Study Hall Lounge Dining Room Cellar
//Characters = Miss Scarlett, Mr. Green, Colonel Mustard, Professor Plum, Mrs. Peacock, Mrs. White

var game = {};

game.name ="Clue";
game.murderer = "???";
game.murderWeapon = "???";
game.murderRoom = "????";

game["rooms"] = ["Kitchen", "Ballrooom","Conservatory", "Billard Room", "Library", "Study", "Hall", "Lounge", "Dining Room", "Cellar"];
game.weapons = ["Candlestick", "Dagger", "Revolver", "Lead Pipe", "Rope", "Wrench"];
game["characters"] = ["Miss Scarlett", "Mr. Green", "Colonel Mustard", "Professor Plum", "Mrs. Peacock", "Mrs. White"];

console.log(game.weapons);