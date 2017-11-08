// prototype for the Restaurant class
var Restaurant = {

    getFullAddress: function () {
        return this.address + "<br>" + this.city + ", " + this.state + "&nbsp;&nbsp;" + this.zip;
    }

};

window.onload = function() {
    let xmlhttp = new XMLHttpRequest();
    xmlhttp.open('GET', 'cuisines', true);
    xmlhttp.onreadystatechange = function(){
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            var cuisines = JSON.parse(xmlhttp.responseText);
            //alert(cuisines);
            buildMenu(cuisines);
            selectCuisine(cuisines[0]);
            getRestaurants(cuisines[0]);

        }
    }
    xmlhttp.send(null);

};


function buildMenu(cuisines) {

    // get the menu element
    var isFirst = true;
    var cuisineMenu = document.getElementById("cuisine-menu");

    cuisines.forEach(function(item) {

        var button = document.createElement("input");
        button.setAttribute("type","radio");
        button.setAttribute("id",item);
        button.setAttribute("name","cuisine");
        button.setAttribute("value",item);
        button.setAttribute("onclick","selectCuisine(this)");

        if( isFirst == true) {

            isFirst = false;
            button.setAttribute("checked","true");
            button.innerText = item;

        }

        cuisineMenu.appendChild(button);

        var span = document.createElement("span");
        // make the first character uppercase
        span.innerText = item;
        cuisineMenu.appendChild(span);

        var linebreak = document.createElement("br");
        cuisineMenu.appendChild(linebreak);

    });
    

}


function selectCuisine(radiobutton) {
    //alert(radiobutton.value);
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

    
    info.innerHTML = "Data";

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

        for (var j = 0; j < restaurants[i].reviews.length; j++) {
            var reviewParagraph = document.createElement("p");
            reviewParagraph.innerText = restaurants[i].reviews[j].text;
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


// use this function to show and hide the review
function toggleReview(i) {

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