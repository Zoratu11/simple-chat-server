const express = require("express");
const app = express();

const port = process.env.PORT || 8000;

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
});

server = app.listen(port, () => {
    console.log("Server is running on port " + port);
});

const socket = require("socket.io");
const io = socket(server);

io.on("connection", (socket) => {
    console.log(socket.id);

    socket.on("SEND_MESSAGE", (data) => {
        io.emit("RECIEVE_MESSAGE", data);
    });
});
