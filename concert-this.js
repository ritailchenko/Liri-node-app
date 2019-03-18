 
module.exports = concert;

var axios = require("axios");

var concert = process.argv[2];

// Then run a request with axios to the OMDB API with the movie specified
axios.get("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp").then(
  function(response) {
    console.log("title " + response.data.Name);
    console.log("The movie's rating is: " + response.data.Location);
    console.log("The movie's rating is: " + response.data.Date);
  }
);