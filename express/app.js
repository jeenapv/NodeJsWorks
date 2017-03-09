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


app.post('/samplePost', function (req, res) {
  res.send('POST API CALLED SUCCESS');
})
app.post('/sample', function (req, res) {
  res.send('POST API CALLED SUCCESS');
})

app.get('/sampleGet', function (req, res) {
  res.send('GET API CALLED SUCCESS');
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})