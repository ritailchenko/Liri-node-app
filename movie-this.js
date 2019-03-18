 
module.exports = movie;

var axios = require("axios");

var movie = process.argv[2];

// Then run a request with axios to the OMDB API with the movie specified
axios.get("http://www.omdbapi.com/?t=" + movie.replace(' ', '+') + "&y=&plot=short&apikey=trilogy").then(
  function(response) {
    console.log("title " + response.data.imdbTitle);
    console.log("The movie's rating is: " + response.data.imdbRating);
    
  }
);