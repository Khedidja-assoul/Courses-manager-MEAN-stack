const express = require('express');
const bodyParser = require('body-parser');

const { mongoose } = require('./db/db.js');
 

var courseController = require('./controllers/courseController.js');
var app = express();
var cors = require('cors');

app.use(function(req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Max-Age", "1800");
  res.setHeader("Access-Control-Allow-Headers", "content-type");
  res.setHeader("Access-Control-Allow-Methods","PUT, POST, GET, DELETE, PATCH, OPTIONS");
    next();
  });
  



app.use(bodyParser.json());
app.use('/courses', courseController);
app.use(cors()); 





app.listen(3006, () => console.log('Server started at port : "3006"'));

