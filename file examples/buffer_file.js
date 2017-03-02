var fs = require("fs");
var fileName = "input.txt";
fs.watch(fileName, {
  persistent: true
}, function(event, filename) {
  console.log(event + " event occurred on " + filename);
});