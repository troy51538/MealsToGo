const { mocks, addMockImage } = require("./mock");
const url = require("url");
const functions = require("firebase-functions");

const addGoogleImage = (restaurant) => {
  const ref = restaurant.photos[0].photo_reference;
  if (!ref) {
    restaurant.photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ];
    return restaurant;
  }
  restaurant.photos = [
    `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${ref}&key=AIzaSyDfb5Xh3VQ4QVKqjWcQTJ30g7d2-6hqc1o`,
  ];
  return restaurant;
};

module.exports.placesRequest = async (request, response, client) => {
  const { location, mock } = url.parse(request.url, true).query;
  if (mock === "true") {
    const data = mocks[location];
    if (data) {
      data.results = data.results.map(addMockImage);
    }

    return response.json(data);
  }

  client
    .placesNearby({
      params: {
        location: location,
        radius: 1500,
        type: "restaurant",
        key: "AIzaSyDfb5Xh3VQ4QVKqjWcQTJ30g7d2-6hqc1o",
      },
      timeout: 1000,
    })
    .then((res) => {
      res.data.results = res.data.results.map(addGoogleImage);
      return response.json(res.data);
    })
    .catch((e) => {
      response.status(400);
      return response.send(e.response);
    });
};

// const { mocks, addMockImage } = require("./mock");
// const url = require("url");

// module.exports.placesRequest = (request, response) => {
//   const { location } = url.parse(request.url, true).query;
//   const data = mocks[location];
//   if (data) {
//     data.results = data.results.map(addMockImage);
//   }

//   response.json(data);
// };
