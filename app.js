
let express = require("express")
const { Socket } = require("socket.io")
let app = express()
let server = require("http").createServer(app)
let io = require("socket.io")(server)

server.listen(3000)
console.log('Server started!')

app.use(express.static("static"))
app.get("/", function(req, res){
  res.sendFile(__dirname + "/help-chat.html")
})

let connections = 0
io.sockets.on('connection', function(socket){
  connections++
  console.log("Connection " + connections)
})
