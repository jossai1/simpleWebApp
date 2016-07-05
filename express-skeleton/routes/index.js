var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  //res.render('index', { title: 'Express' });
  res.redirect('/index.html');
});

//our api will work as so :GET /todos   - Get all todo items//
/*Then go to /routes/index.js, add a new route, response all todo items in json:*/
var sampleToDoItems = require('../todoTasks.json');

/* GET Todo listing. */
//GET /Todos/
//app.METHOD(PATH, HANDLER)
/*
app is an instance of express.
METHOD is an HTTP request method, in lowercase.
PATH is a path on the server.
HANDLER is the function executed when the route is matched.

*/
router.get('/todos', function(req, res) {

  res.type('application/json');
  res.status(200);

  res.json(sampleToDoItems);
});

module.exports = router;
