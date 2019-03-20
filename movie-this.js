    var axios = require("axios");

    module.exports = function(movie){
    
    
    // Then run a request with axios to the OMDB API with the movie specified  
    axios.get("http://www.omdbapi.com/?t=" + movie.replace(/\s/g, '+')  + "&y=&plot=short&apikey=trilogy").then(
      function(response) {
        console.log("The movie title: " + response.data.Title)
        console.log("The movie year of release: " + response.data.Year);
        console.log("The movie rating is: " + response.data.imdbRating);
        console.log("Conuntry: " + response.data.Country);
        console.log("Plot: " + response.data.Plot);
        console.log("Actors: " + response.data.Actors);
        console.log("The movie rotten tomato's rating: " + response.data.Ratings[1].Value);
         // console.log(response.data);
        // console.log(JSON.stringify(response.data, null, 2));
        if ( this.movie === " " ) {
          console.log("http://www.omdbapi.com/?t=mr.nobody&apikey=trilogy");
        }
      }
    );
};

