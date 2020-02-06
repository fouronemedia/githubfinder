const express = require('express')
const http = require('http')
const path = require('path')

let app = express()

console.log(__dirname);
app.use(express.static(path.join(__dirname, 'build')))

let port = process.env.PORT
if (port == null || port == "") {
    port = 3000
}
app.set('port', port)

const server = http.createServer(app)
server.listen(port, () => console.log(`Running on localhost:${port}`))