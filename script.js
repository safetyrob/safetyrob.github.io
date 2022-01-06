const restaurantAPI =
  "https://iskarr.github.io/austindonovan.github.io/api/business.json";

const container = document.getElementById("restaurant");

fetch(restaurantAPI)
  .then((response) => response.json())
  .then((jsObject) => {
    jsObject.business.forEach((restaurant) => {
      buildCard(restaurant);
    });
  });

function buildCard(restaurant) {
  var cardBody = document.createElement("div");
  cardBody.classList.add("card-body");
  // cardBody.innerText = restaurant;

  var name1 = document.createElement("h3");
  name1.classList.add("businessName");
  name1.innerText = restaurant.name;
  cardBody.appendChild(name1);

  var para1 = document.createElement("p");
  para1.classList.add("address");
  para1.innerText = restaurant.address;
  cardBody.appendChild(para1);

  var para2 = document.createElement("p");
  para2.classList.add("description");
  para2.innerText = restaurant.description;
  cardBody.appendChild(para2);

  var imageurl = document.createElement("img");
  imageurl.src = restaurant.imageurl;
  cardBody.appendChild(imageurl);
  imageurl.classList.add("image");

  container.appendChild(cardBody);
}
