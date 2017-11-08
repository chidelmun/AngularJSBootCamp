/////////////////////////////////////////////////////////////
//
// Dependencies
//

var express = require('express');
var fs = require("fs");

/////////////////////////////////////////////////////////////
//
// Server Setup
//

// set up server (app) host and port
var app = express();
var server = app.listen(8080, "127.0.0.1");

// serve static files from the public directory
app.use(express.static(__dirname + "/public"));


/////////////////////////////////////////////////////////////
//
// Initialization
//

// ** CREATE VARIABLES TO HOLD CUISINE AND RESTAURANT ARRAYS HERE **

var cuisines = [];
var restaurants = [];

// this is an Immediately-Invoked Function Expression (IIFE)
// it is used to initialize the server by loading restaurant
// data into memory
cuisines = getRestaurantData('cuisines');

// (function(){
// 	cuisines.forEach(function(cuisine){
// 	restaurants.push(getRestaurantData(cuisine));
// });
// })();

//console.log(cuisines);

cuisines.forEach(function(item){
	//console.log(item);
	var resData = getRestaurantData(item);
	//console.log(resData.length);
	resData.forEach(function(data){
		//console.log(data);
		restaurants.push(data);
	});
	
});

//console.log(restaurants.length);
// ** INSERT IMMEDIATELY-INVOCED FUNCTION EXPRESSION HERE **

// load data from files and convert to JSON
function getRestaurantData(filename) {
    var data = fs.readFileSync(__dirname + "/data/" + filename + ".json", 'utf8');
    return JSON.parse(data);
}



/////////////////////////////////////////////////////////////
//
// RESTful services
//

// get all cuisines
app.get('/cuisines', function(req, res){

    res.end(JSON.stringify(cuisines));

});

// get all restaurants
app.get('/restaurants', function (req, res){

    // ** RETURN ALL RESTAURANTS MATCING THE CUISINE TYPE HERE **
    //console.log(restaurants.length);
    res.end(JSON.stringify(restaurants));

});

// get restaurants by cuisine
app.get('/restaurants/:cuisine', function(req,res){
		var cuisine = req.params.cuisine;
		var results = getRestaurantData(cuisine);
		//console.log(results);
		res.end(JSON.stringify(results));

		// ** RETURN RESTAURANTS MATCING THE CUISINE TYPE HERE **
});
