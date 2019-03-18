    var axios = require("axios");

module.exports = function(movie){
    
    
    // Then run a request with axios to the OMDB API with the movie specified
    axios.get("http://www.omdbapi.com/?t=" + movie.replace(/\s/g, '+') + "&y=&plot=short&apikey=trilogy").then(
      function(response) {
        console.log("title " + response.data.imdbTitle);
        console.log("The movie's rating is: " + response.data.imdbYear);
        console.log("The movie's rating is: " + response.data.imdbRating);
        
      }
    );
};

