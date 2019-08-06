var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var postSchema = new Schema({
  name: {
    type: String,
    required: "Name required"
  },
  price : {
    type: Number,
    required: "Number required"
  },
  quantity :{
    type: Number,
    required: "Quantity required"
  }
});

var Post = mongoose.model('Posts', postSchema)
module.exports = Post;