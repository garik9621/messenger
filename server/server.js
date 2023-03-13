const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server, {
    cors: {
        origins: ['http://localhost:3000']
    }
});

app.get('/', (req, res) => {
    res.send('Hello')
})

io.on('connection', (socket) => {
    console.log('a user connected');

    socket.on('chat message', (msg) => {
        socket.broadcast.emit('chat message', msg);
    })
});

server.listen(3001, () => {
    console.log('Server is running on port 3001');
})