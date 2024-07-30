const { locations: locationsMock } = require("./geocode.mock");
const url = require("url");
const functions = require("firebase-functions");

module.exports.geocodeRequest = (request, response, client) => {
  const { city, mock } = url.parse(request.url, true).query;
  if (mock === "true") {
    const locationMock = locationsMock[city.toLowerCase()];
    return response.json(locationMock);
  }

  client
    .geocode({
      params: {
        address: city,
        key: "AIzaSyDfb5Xh3VQ4QVKqjWcQTJ30g7d2-6hqc1o",
      },
      timeout: 1000,
    })
    .then((res) => {
      return response.json(res.data);
    })
    .catch((e) => {
      response.status(400);
      return response.send(e);
    });
};

module.exports.reverseGeocodeRequest = (request, response, client) => {
  const { latlng, mock } = url.parse(request.url, true).query;
  client
    .reverseGeocode({
      params: {
        latlng: latlng,
        key: "AIzaSyDfb5Xh3VQ4QVKqjWcQTJ30g7d2-6hqc1o",
      },
      timeout: 1000,
    })
    .then((res) => {
      return response.json(res.data);
    })
    .catch((e) => {
      response.status(400);
      return response.send(e);
    });
};
