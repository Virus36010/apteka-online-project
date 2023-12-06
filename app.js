
let express = require("express")
const { Socket } = require("socket.io")
let app = express()
let server = require("http").createServer(app)
let io = require("socket.io")(server)

let host = 5656
server.listen(host)
console.log('Server started! Host: ' + host)

app.use(express.static("public"))
app.get("/", function(req, res){
  res.sendFile(__dirname + "/public/help-chat.html")
})

let connections = 0
io.sockets.on('connection', function(socket){
  connections++
  //console.log("Connection " + connections)
  //console.log("Connected")
})
if (connections > 0){console.log("Connection " + connections)}
