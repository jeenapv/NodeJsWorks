
var fs = require("fs");  
// Asynchronous read 
fs.readFile('input.txt', function (err, data) {  
   if (err) {  
       return console.error(err);  
   } else{
   		fs.appendFile('input.txt', 'data to append', function (err) {
 });
   } 
   console.log("Asynchronous read: " + data.toString());  
});  
// Synchronous read  
var data = fs.readFileSync('input.txt');
//console.log(data);  
console.log("Synchronous read: " + data.toString());  
console.log("Program Ended");  