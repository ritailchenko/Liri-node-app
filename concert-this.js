// var bands = require(""); 

// var bandsintown = require('bandsintown')(APP_ID);

// module.exports = function(artist){
//      bandsintown.getArtistEventList(artist).then(function(artist) {
//       console.log(data.event);
//     });
// };

var axios = require("axios");
var moment = require('moment');
moment().format();

module.exports = function(artist){

 
axios.get("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp").then(
  function(response) {
    // console.log(response.data[0].venue.name);
    // console.log(response.data[0].venue.region + ", " + response.data[0].venue.city)
    console.log(moment().format((response.data[1].datetime)));
  }
);
};


 



