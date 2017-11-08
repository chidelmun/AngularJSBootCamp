// prototype for the Restaurant class
var Restaurant = {

    getFullAddress: function () {
        return this.address + "<br>" + this.city + ", " + this.state + "&nbsp;&nbsp;" + this.zip;
    }

};

var restaurants = [];

window.onload = function() {

    var xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function() {

        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            var cuisines = JSON.parse(xmlhttp.responseText);
            buildMenu(cuisines);
            getRestaurants(cuisines[0]);
        }
    };

    xmlhttp.open("GET", "/cuisines", true);
    xmlhttp.send();

};


function buildMenu(cuisines) {

    var menu = document.getElementById("cuisine-menu");

    // this is a closure
    var isFirst = true;

    cuisines.forEach(function(cuisine) {

        var radiobutton = document.createElement("input");
        radiobutton.setAttribute("type","radio");
        radiobutton.setAttribute("id",cuisine);
        radiobutton.setAttribute("name","cuisine");
        radiobutton.setAttribute("value",cuisine);
        radiobutton.setAttribute("onclick","selectCuisine(this)");

        if( isFirst == true) {

            isFirst = false;
            radiobutton.setAttribute("checked","true");

        }

        menu.appendChild(radiobutton);

        var span = document.createElement("span");
        // make the first character uppercase
        span.innerText = cuisine.charAt(0).toUpperCase() + cuisine.slice(1);
        menu.appendChild(span);

        var linebreak = document.createElement("br");
        menu.appendChild(linebreak);

    });

}


function selectCuisine(radiobutton) {
    getRestaurants(radiobutton.value);
}


function getRestaurants( selectedCuisine ) {

    var restaurants = [];

    var xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function() {

        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

            var values = JSON.parse(xmlhttp.responseText);

            values.forEach(function (restaurant) {
                // apply the prototype
                restaurant.__proto__ = Restaurant;

                // add to array of restaurants
                restaurants.push(restaurant);
            })

            showRestaurants(restaurants);

        }
    };

    xmlhttp.open("GET", "/restaurants/" + selectedCuisine, true);
    xmlhttp.send();

}

function showRestaurants( restaurants ) {

    var info = document.getElementById("restaurant-info");

    info.innerHTML = "";

    for( var i = 0; i < restaurants.length; i++ ) {

        var title = document.createElement("title");
        title.innerHTML = restaurants[i].name;
        info.appendChild(title);

        var addressDiv = document.createElement("div");
        addressDiv.innerHTML = restaurants[i].getFullAddress();
        info.appendChild(addressDiv);

        var showReviewDiv = document.createElement("div");
        showReviewDiv.setAttribute("class","review-div");
        showReviewDiv.innerHTML = "Review";

        var img = document.createElement("img");
        img.setAttribute("src","/images/plus.png");
        img.setAttribute("class","icon");
        img.setAttribute("onclick","toggleReview("+ i +")");
        img.setAttribute("id","review-toggle-" + i );
        showReviewDiv.appendChild(img);

        info.appendChild(showReviewDiv);

        var reviewDiv = document.createElement("div");
        reviewDiv.style.display = 'none';
        reviewDiv.setAttribute("id","review-" + i );

        for (var j = 0; j < restaurants[i].review.length; j++) {
            var reviewParagraph = document.createElement("p");
            reviewParagraph.innerText = restaurants[i].review[j].text;
            reviewDiv.appendChild(reviewParagraph);
        }

        var ratings = document.createElement("p");
        ratings.innerText = "Rating: " + restaurants[i].rating + "/5";

        reviewDiv.appendChild(ratings);

        info.appendChild(reviewDiv);

        if( i < restaurants.length - 1 ) {
            var hr = document.createElement("hr");
            info.appendChild(hr);
        }

    }

}

function toggleReview(i) {

    // set the 'toggle' image
    var toggleImg = document.getElementById("review-toggle-"+i);

    var display = "none";
    var src     = "/images/plus.png"

    if( toggleImg.getAttribute("src").indexOf("plus") > -1 ) {
        // currently displaying plus
        src     = "/images/minus.png"
        display = "block";
    }

    toggleImg.setAttribute("src",src);

    // show/hide the review
    var reviewDiv = document.getElementById("review-"+i)
    reviewDiv.style.display = display;

}