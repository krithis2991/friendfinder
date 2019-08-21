// Require express
//Require path


var express = require("express");
var path = require("path");

var app = express();
var PORT = 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./app/routing/htmlRoutes.js")(app, path);
require("./app/routing/apiRoutes.js")(app);

app.listen(PORT, function(){
    console.log("App listening on PORT " + PORT);
});