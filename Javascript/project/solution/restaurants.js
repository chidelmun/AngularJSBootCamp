var express = require('express');
var app = express();
var fs = require("fs");

/////////////////////////////////////////////////////////////
//
// Server Setup
//

// set up host and port
var server = app.listen(8080, "127.0.0.1");

// serve static files from the public directory
app.use(express.static(__dirname + "/public"));



/////////////////////////////////////////////////////////////
//
// Initialization
//

var cuisines = [];
var restaurants = [];

// this is an Immediately-Invoked Function Expression (IIFE)
// it is used to initialize the server by loading restaurant
// data into memory
(function () {

    // load the cuisines
    cuisines = getRestaurantData("cuisines");

    cuisines.forEach(function(cuisine) {

        // load each restaurant array
        var values = getRestaurantData(cuisine);

        for( var i = 0; i < values.length; i++ ) {
            values[i].cuisine = cuisine;
        }

        // concatenate the arrays
        Array.prototype.push.apply(restaurants,values);

    });

})();

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
    console.log(restaurants.length);
    res.end(JSON.stringify(restaurants));

});

// get restaurants by cuisine
app.get('/restaurants/:cuisine', function (req, res){

    var cuisine = req.params.cuisine;

    var restaurantsToReturn = [];

    restaurants.forEach(function(restaurant) {
      if( restaurant.cuisine == cuisine ) {
          restaurantsToReturn.push(restaurant);
      }
    });

    res.end(JSON.stringify(restaurantsToReturn));

});