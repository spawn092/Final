var http = require('http');
var fs = require('fs');
var server = http.Server(app);
var bodyParser = require('body-parser');
var mongoose = require("mongoose");
var mongo = require('mongodb');

mongo.MongoClient.connect(db_url,
    {useNewUrlParser:true}, function(err, client){
      if(err){
        console.log('Could not connect to MongoDB');
      }else{
        db = client.db('node-cw9');
      }
    })
  mongoose.connect(db_url+"/");
  mongoose.connection.on('error', function(err){
    console.log(err);
    console.log('Could not connect to mongodb');
  })

var Schema = mongoose.Schema;
var server = http.createServer(function(req, res){
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  fs.readFile('index.html', function(err, data){
    if(err){
      return console.log("File read error");
    }
    res.end(data);
  });
});

var productSchema = new Schema({
    name: {
      type: String,
      required: "Name required"
    },
    price: {
      type: Number,
    },
    quantity: {
        type: Number,
    }
  });
  
  var Article = mongoose.model('Article', articleSchema)
  
server.listen(process.env.PORT || 3000, process.env.IP || 'localhost', function(){
    console.log('Server running');
});