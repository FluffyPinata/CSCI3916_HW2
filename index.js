const express = require('express')
const app = express()
const http = require('http')
const port = 3000

app.get('/', function(req, res) {
  res.send("Hello world!")
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

http.createServer(app).listen(process.env.PORT || 8000)