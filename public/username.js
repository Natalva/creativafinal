//import socket.io into this file as well
var username = "Anonymous";

const usernameInput = document.getElementById("username-input");
const usernameSubmit = document.getElementById("username-submit");

usernameSubmit.addEventListener("click", function() {
  username = usernameInput.value;
  console.log(username)
})