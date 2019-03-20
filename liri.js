require("dotenv").config();

var command = process.argv[2];
var value = process.argv[3];

var result = [];

var concert = require("./concert-this.js");
// var whatItSays = require("./do-what-it-says.js");
var spotify = require("./spotify-this-song.js");
var movie = require("./movie-this.js");

 
if (command === "concert-this") {
    result = concert(value);
} else if (command === "spotify-this-song") {
    result = spotify(value);
} else if (command === "movie-this") {
    result = movie(value);
} else if (command === "do-what-it-says") {
    //result = whatItSays(value);
} else {
   result = ["invalid input"];
}
 
