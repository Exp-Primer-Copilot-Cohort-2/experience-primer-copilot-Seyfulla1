// create web server
const express = require('express');
const app = express();
const port = 3000;

// use public folder to store static files
app.use(express.static('public'));

// use body-parser to parse request body
const bodyParser = require('body-parser');
app.use(bodyParser.json());

// use comments.js to handle comments
const comments = require('./comments');

// handle GET request to /comments
app.get('/comments', (req, res) => {
  res.send(comments.getComments());
});

// handle POST request to /comments
app.post('/comments', (req, res) => {
  const { author, text } = req.body;
  comments.addComment(author, text);
  res.send(comments.getComments());
});

// start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
