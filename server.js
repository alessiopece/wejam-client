const app = require('express')();
const express = require('express');
const path = require('path');
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const PORT = process.env.PORT || 3000;


io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('note', (note) => {
    console.log('note: ' + note);
    socket.broadcast.emit('note', note)
  });
});

app.use('/', express.static(path.join(__dirname, 'build')));

http.listen(PORT, () => {
    console.log(`listening on *:${PORT}`);
  });