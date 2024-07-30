const functions = require("firebase-functions");
const { geocodeRequest, reverseGeocodeRequest } = require("./geocode");
const { placesRequest } = require("./places");

const { Client } = require("@googlemaps/google-maps-services-js");

const client = new Client({});

exports.geocode = functions.https.onRequest((request, response) => {
  geocodeRequest(request, response, client);
});

exports.placesNearby = functions.https.onRequest((request, response) => {
  placesRequest(request, response, client);
});

exports.reverseGeocode = functions.https.onRequest((request, response) => {
  reverseGeocodeRequest(request, response, client);
});
