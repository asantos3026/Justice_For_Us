var express = require('express'),
    app = express(),
    mongoose = require('mongoose'),
//Require the model 
    Project = require('./models/project'),
    bodyParser = require('body-parser'),
    _ = require("underscore");

//tell app to use bodyParser middleware
app.use(bodyParser.urlencoded({extended: true}));  

//connect to mongodb
mongoose.connect(
  process.env.MONGOLAB_URI ||
  process.env.MONGOHQ_URL ||
  'mongodb://localhost/justiceForUsProj'
  );

//serve JS and CSS files 
app.use(express.static(__dirname + '/public'));  

//STATIC ROUTES

//Homepage
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/public/index.html')
});

//API ROUTES

//get current projects from the database
app.post('/api/')

//create a new project for current user



app.listen(3000, function(){  
  console.log('server started at local host: 3000');
 }); 

