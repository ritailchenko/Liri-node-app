var bands = require(""); 

var bandsintown = require('bandsintown')(APP_ID);

module.exports = function(artist){
     bandsintown.getArtistEventList(artist).then(function(artist) {
      console.log(data.event);
    });
};


 



