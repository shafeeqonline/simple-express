var express = require('express')
var app = express()

app.get('/', (req, res) => {
  res.send('Hello World!')
})

var server = app.listen(3000, () => {
  console.log(`server running at port http://localhost/${server.address().port}`)
})