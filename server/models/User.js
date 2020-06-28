const mongoose = require('mongoose');
// const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
  id : {
    type : String
  },
  email : {
    type : String,
    index : {
      unique : true
    }
  },
  phone : {
    type : Number
  },
  name : {
    type : String
  },
  password : {
    type : String
  },
  createdAt : {
    type: Date,
  },
  updatedAt : {
    type : Date,
    default : Date.now()
  }

})

module.exports = mongoose.model('User', UserSchema);