
let express = require("express")
const { Socket } = require("socket.io")
let app = express()
let server = require("http").createServer(app)
let io = require("socket.io")(server)

server.listen(3000)

app.use("/", function(request, respons){
  respons.sendFile(__dirname + "/help-chat.html")
  //respons.sendFile(__dirname + "/CSS/helpchat.css")
})
app.use(express.static("CSS"))
app.use("/CSS", express.static("helpchat.css"))
app.use("/", function(request, respons){
  respons.sendFile(__dirname + "/CSS/helpchat.css")
})

let connections = 0
io.sockets.on("connection", function(socket){
  connections++
  console.log("Connection " + connections)
})
