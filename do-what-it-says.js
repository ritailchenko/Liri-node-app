 
// module.exports = function(text);

var fs = require("fs");

fs.readFile("random.txt", "utf8", function(data) {
 
 console.log(data);
});
