var socket = io()

const messageInput = document.getElementById("message-input")
const messageSubmit = document.getElementById("message-submit")
const chatbox = document.getElementById("chat-box")

messageSubmit.addEventListener("click", function() {
  // console.log(username)
  const messageText = messageInput.value
  addMessageToChat(messageText, username)
  socket.emit("new-chat-message", messageText, username)
})

socket.on("new-chat-message", function(messageText, username) {
  addMessageToChat(messageText, username)
})


function addMessageToChat(text, username) {
  //create message element
  const message = document.createElement("div")
  message.classList.add("chat-message")

  //add the username
  const messageUsername = document.createElement("p")
  messageUsername.classList.add("message-username")
  messageUsername.innerHTML = username + ":";
  message.appendChild(messageUsername)

  const messageText = document.createElement("p")
  messageText.classList.add("message-text")
  messageText.innerHTML = text;
  message.appendChild(messageText)

  //add message to chatbox
  chatbox.appendChild(message)
}