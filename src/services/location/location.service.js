import camelize from "camelize";

import { host } from "../../utils/env";

export const locationRequest = (searchTerm) => {
  return fetch(`${host}/geocode?city=${searchTerm}`).then((res) => {
    return res.json();
  });
};

export const reverseGeocodeRequest = (latlng) => {
  return fetch(`${host}/reverseGeocode?latlng=${latlng}`).then((res) => {
    return res.json(0);
  });
};

// export const locationRequest = (searchTerm) => {
//   return new Promise((resolve, reject) => {
//     const locationMock = locations[searchTerm];
//     if (!locationMock) {
//       reject("not found");
//     }
//     resolve(locationMock);
//   });
// };

export const locationTransform = (result) => {
  const formattedResponse = camelize(result);
  const { geometry = {} } = formattedResponse.results[0];
  const { lat, lng } = geometry.location;

  return { lat, lng, viewport: geometry.viewport };
};
