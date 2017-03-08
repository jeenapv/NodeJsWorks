var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.send('Hello World!')
})
app.get('/kk', function (req, res) {
  res.send('<h1>jeena</h1><title>myapp</title>')
})
app.get('/kk/jeena', function (req, res) {
   res.sendFile(__dirname + '/index.html')
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})