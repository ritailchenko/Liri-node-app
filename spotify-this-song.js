var Spotify = require('node-spotify-api');
var keys = require("./keys.js");

var spotify = new Spotify(keys.spotify);

module.exports = function(song){
  var result = [];
  return new Promise (function(resolve) {
    spotify.search({ type: 'track', query: song }, function(err, data) {
      console.log(JSON.stringify(data.tracks.items[0].artists[0].name));
      console.log(JSON.stringify(data.tracks.items[1].name));
      console.log(JSON.stringify(data.tracks.items[1].href));
      console.log(JSON.stringify(data.tracks.items[0].album.name));
      resolve(result);
<<<<<<< HEAD
      console.log("\n--------------\n");
=======
>>>>>>> 4a6c3c0fa1f7559ed6bde9975e3fb0ed3edbcb54
    });
  })   
};




