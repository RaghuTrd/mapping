const express = require('express');
const app = express();
const http = require('http');
const path = require('path'); 
const socketio = require("socket.io");

const server = http.createServer(app);

const io = socketio(server);

// Set view engine to EJS
app.set("view engine", "ejs");

// Serve static files from the 'public' folder
app.use(express.static(path.join(__dirname, "public")));

// Socket.io connection
io.on("connection", function(socket) {
    console.log("Connected to Socket.io");
});

// Render the index page
app.get("/", function (req, res) {
    res.render("index"); // This will look for 'views/index.ejs'
});

// Start the server
server.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
