// MODULES REQUIREMENTS
var express = require("express"),
	bodyParser = require("body-parser"),
	methodOverride = require("method-override");

// MODELS

// ROUTES REQUIREMENTS
var indexRoutes = require("./routes/index");

// APP SETTINGS
var app = express();
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + "/public"));
app.use(methodOverride("_method"));

// ROUTES
app.use("/", indexRoutes);



app.listen(3000, "localhost", function(){
	console.log("Server is listening!");
});
