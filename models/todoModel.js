var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var todoSchema = new Schema({
    todoId: {
        type: mongoose.Schema.Types.ObjectId,
        index: true,
        required: true,
        auto: true,
      },
      createdAt : { type: Date, required: true, default: Date.now() },
      updatedAt : { type: Date, required: true, default: Date.now() },
    username: String,
    todo: String,
    isDone: Boolean,
    hasAttachment: Boolean,
    photoUrl : String,
    name:
    description
    totalComments
});

var Todos = mongoose.model('Todos', todoSchema);
module.exports = Todos; 