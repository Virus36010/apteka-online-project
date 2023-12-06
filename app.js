
let express = require("express")
const { Socket } = require("socket.io")
let app = express()
let server = require("http").createServer(app)
let io = require("socket.io")(server)

let host = 5656
server.listen(host)
console.log('Server started! Host: ' + host)

let users = []
let connections = []

app.use(express.static("public"))
app.get("/", function(req, res){
  res.sendFile(__dirname + "/public/help-chat.html")
})

let how_many_connections_was = 0
io.sockets.on('connection', function(socket){
  how_many_connections_was++
  connections.push(socket);
  console.log("User " + how_many_connections_was + " connected")

  socket.on('disconnect', function(data){
    connections.splice(connections.indexOf(socket),1);
    console.log("User disconnected")
  })

  socket.on('send mess', function(data){
    io.sockets.emit('add mess', {mess: data.mess, name:data.name})
  })
})
