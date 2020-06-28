var express = require('express');
var http = require('http');
var socketio = require('socket.io');
var mongoose = require('mongoose');
var config = require('./configs/index');
// ----------

var messages = require('./actions/messages');


/**
 * Set up database
 */
mongoose.connect(config.db, { useNewUrlParser: true });
mongoose.Promise = global.Promise;

/**
 * App
 */
var app = express();

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

  /**
   * Server listen message from client.
   */
  socket.on('message', async (message) => {
    console.log(message)
   
    // Steps:
    // 1. save message to db
    const res = await messages.save();
    // 2. return response to client.
    socket.emit('message', res);
    
  });
})