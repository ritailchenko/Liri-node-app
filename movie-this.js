var axios = require("axios");
module.exports = function(movie){
  if( !movie || movie.trim().length === 0) {
      movie = "mr.Nobody";
  }
  var result = [];
  return axios.get("http://www.omdbapi.com/?t=" + movie.replace(/\s/g, '+')  + "&y=&plot=short&apikey=trilogy").then(
    function(response) {
      result.push("The movie title: " + response.data.Title)
      result.push("The movie year of release: " + response.data.Year);
      result.push("The movie rating is: " + response.data.imdbRating);
      result.push("Conuntry: " + response.data.Country);
      result.push("Plot: " + response.data.Plot);
      result.push("Actors: " + response.data.Actors);
      result.push("The movie rotten tomato's rating: " + response.data.Ratings[1].Value);
      return result;  
    }
  );
};



