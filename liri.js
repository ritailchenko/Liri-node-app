require("dotenv").config();
var fs = require("fs");

var command = process.argv[2];
var value = process.argv[3];

var resultPromise;

var concert = require("./concert-this.js");
var spotify = require("./spotify-this-song.js");
var movie = require("./movie-this.js");

if (command === "do-what-it-says") {
    var commandTwo = fs.readFileSync("random.txt", "utf8").toString();
    command = commandTwo.split(",")[0];
    value = commandTwo.split(",")[1];
}

 
if (command === "concert-this") {
    resultPromise = concert(value);
} else if (command === "spotify-this-song") {
    resultPromise = spotify(value);
} else if (command === "movie-this") {
    resultPromise = movie(value);
 } else {
   resultPromise = ["invalid input"];
}

resultPromise.then(function(r) {
 for (var i = 0; i < r.length; i++) {
   console.log(r[i]);
   fs.appendFile("log.txt", "\n" + r[i], function(){
       
   });
} 
});


 
