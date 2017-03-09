var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json 
app.use(bodyParser.json());
app.get('/', function(req, res){
  var html = '<form action="/" method="post">' +
               'Enter your name:' +
               '<input type="text" name="userName" placeholder="..." />' +
               '<br>' +
               '<button type="submit">Submit</button>' +
            '</form>';
  res.send(html);
});

app.post('/login', function(req, res){
 console.log(req.body);
  var userName = req.body.userName;
  var password = req.body.pass;
  if(userName=="kk" && password=="123"){
  	var json = {
  		"result":"true",
	    "description":"login success"
    };
  	res.send(json);
  }else{
  	var json = {
  		"result":"false",
	    "description":"login failed"
    };
  	res.send(json);
  }
  
});
app.post('/name', function(req, res){
  console.log(req.body);
  var name= req.body.name;
  var captitalName = name.toUpperCase();
  var json = {
    "result":"true",
    "capitalizedName":captitalName
  }
  res.send(json);
 }); 
app.listen(3000);