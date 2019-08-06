module.exports = function(app) {

    var post = require('./../controller/post-controllers.js');
  
    app.get('/new-post', post.new);
  
    app.post('/post/create', post.create);
  
    app.get('/post/list', post.list);
    
    app.get('/post/:postID', post.single);
  
  }