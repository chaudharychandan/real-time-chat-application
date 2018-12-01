const express = require('express');
const socket = require('socket.io');

const app = express();
const connections = {};

const server = app.listen(4000, () => {
  console.log('running on port 4000');
});

const io = socket(server);

io.on('connection', (socket) => {

  socket.on('login', (user) => {
    connections[user.id] = socket.id;
  });

  socket.on('message', function(message) {
    const { to } = message;
    const socketId = connections[to];
    io.to(socketId).emit('message', message);
  });
});
