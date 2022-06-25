const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

app.get('/', (req, res) => {
  res.send('Hello');
});

io.on('connection', (socket) => {
  console.log('Someone Connected');
  socket.on('join-room', (roomId, userName) => {
    console.log('User Joined Room');
    console.log('Room id:', roomId);
    console.log('User name:', userName);
  });
});

const PORT = process.env.port || 9008;

server.listen(PORT, () => {
  console.log(`Video chat app backend on port ${PORT}`);
});
