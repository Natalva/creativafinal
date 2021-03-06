//"serve" the front-end
const express = require("express");
const app = express();

//facilitate multiple users interacting at once
const server = require("http").createServer(app);
const io = require("socket.io")(server);

//ENVIRONMENT VARIABLE
const port = process.env.PORT || 3000;
server.listen(port, function () {
  console.log(`Server listening at port ${port}`, port);
});

//serve the files in the public folder as a front-end to this server
//rather, serve the index.html inside public, which loads in your css & js
app.use(express.static('public'));

/*** SETTING UP SOCKET.IO ***/
io.on("connection", function (socket) {


  /***********************/
  /*** CHATROOM EVENTS ***/
  /***********************/
  socket.on("new-chat-message", function(messageText, username) {
    //take the message data and broadcast it everywheree else!
    socket.broadcast.emit("new-chat-message", messageText, username)
  })

  /**********************/
  /*** POST-IT EVENTS ***/
  /**********************/

  //when any user submits a new post-it...
  socket.on("new post-it", function (postItText, id, username) {
    //take the post-it text received and broadcast it everywhere else
    socket.broadcast.emit("new post-it", postItText, id, username)
  })

  socket.on("edit post-it", function (postItText, id) {
    //take the post-it text received and broadcast it everywhere else
    socket.broadcast.emit("edit post-it", postItText, id)
  })
})