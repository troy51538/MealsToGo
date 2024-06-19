const functions = require("firebase-functions");
const { geocodeRequest } = require("./geocode");

const { onRequest } = require("firebase-functions/v2/https");

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

exports.geocode = onRequest((request, response) => {
  geocodeRequest(request, response);
});
