var app = require('express').createServer();
var io = require('socket.io')(app);

app.listen(3000);