
var axios = require("axios");
var moment = require('moment');

module.exports = function(artist){
var result = [];
 
return axios.get("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp").then(
  function(response) {
    result.push(response.data[0].venue.name);
    result.push(response.data[0].venue.region + ", " + response.data[0].venue.city)
    result.push(moment(response.data[1].datetime).format("MM/DD/YYYY"));
    return result;
<<<<<<< HEAD
    console.log("\n--------------\n");
=======
>>>>>>> 4a6c3c0fa1f7559ed6bde9975e3fb0ed3edbcb54
  }
 );
};


 



