var mysql = require('mysql');
var express = require('express');
var app = express();

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'test'
});

connection.connect();

app.get('/test', function(req, res) {

    connection.query('SELECT * from service', function(error, results, fields) {
        if (error) {
            console.log("error");
            console.log(error);
            response.end(error);
        } else {
            connection.end();
            var result = {};
            result.name = results[0].service_name;
            console.log("out " + result);
            res.end(JSON.stringify(result));
        }
    });
})

var server = app.listen(8081, function() {

    var host = server.address().address
    var port = server.address().port

    console.log("Example app listening at http://%s:%s", host, port)

})