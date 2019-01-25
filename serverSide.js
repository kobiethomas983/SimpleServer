//needed to use the app.listen methods and app.use method
var express = require("express");
var app = express();
var logger = require("morgan");
var bodyParser = require("body-parser");
var portno = 3001;

app.use(bodyParser.urlencoded({extended:true}));
//logger variable logs the get methods being used by client
app.use(logger("default"));
//look into the website folder to check for sources for the routes/path
app.use(express.static("website"));

//if they use a type a route/path we do not recognize send the 404 error
  app.use((req, res, next) => {
  res.send("404 ERROR").sendStatus(404);
  return;
});

//listen on the specfic portnumber 9001
app.listen(portno, function(){
  console.log("The server has started on port 9001");
});
