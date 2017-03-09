var express = require('express')
var app = express()

app.post('/quotes', (req, res) => {
  console.log('Hellooooooooooooooooo!')
})
app.listen(2000, function () {
  console.log('Example app listening on port 2000!')
})