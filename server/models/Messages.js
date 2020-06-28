const mongoose = require('mongoose');

const MessageSchema = new mongoose.Schema({
  id : {
    type : String
  },
  message : {
    type : String
  },
  createdAt : {
    type: Date
  },
  updatedAt : {
    type : Date,
    default : Date.now()
  },
  userId : {
    type : String
  }
  // timestamps
  /**
   * Update more infors later.
   */
});

/*
$table->increments('id');
            $table->string('answer_text');
            $table->unsignedInteger('user_id');
            $table->unsignedInteger('question_id');
            $table->timestamps();

            
*/

module.exports = mongoose.model('Message', MessageSchema);