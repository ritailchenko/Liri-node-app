var Spotify = require('node-spotify-api');
var keys = require("./keys.js");

var spotify = new Spotify(keys.spotify);

module.exports = function(song){
    spotify.search({ type: 'track', query: song }, function(data) {
       
      console.log(data); 
      });
};


