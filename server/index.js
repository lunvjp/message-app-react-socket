var express = require('express');
var http = require('http');
var socketio = require('socket.io');
// ----------

/**
 * App
 */
var app = express();
app.get('/', () => {
  console.log('Home page')
})

/**
 * Server listen
 */
var server = http.Server(app);
server.listen(3000, () => {
  console.log('server is listening...!')
})

/**
* Websocket connection
*/
var websocket = socketio(server);
websocket.on('connection', (socket) => {
  console.log('One english learner just joined')
  console.log(socket.id)
})