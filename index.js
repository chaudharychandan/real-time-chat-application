const express = require('express');
const path = require('path');
const socket = require('socket.io');

const app = express();
const connections = {};

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client/build')));
}

const server = app.listen(process.env.PORT || 4000);

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
