import camelize from "camelize";
import { host, isMock } from "../../utils/env";

// export const restaurantsRequest = (location) => {
//   return new Promise((resolve, reject) => {
//     const mock = mocks[location];
//     if (!mock) reject("not found");
//     resolve(mock);
//   });
// };

export const restaurantsRequest = async (location) => {
  return fetch(`${host}/placesNearby?location=${location}&mock=${isMock}`).then(
    (res) => {
      return res.json();
    }
  );
};

export const restaurantsTransform = ({ results = [] }) => {
  const mappedResults = results.map((restaurant) => {
    return {
      ...restaurant,
      address: restaurant.vicinity,
      isOpenNow: restaurant.opening_hours && restaurant.opening_hours.open_now,
      isClosedTemporarily: restaurant.business_status === "CLOSED_TEMPORARILY",
    };
  });

  return camelize(mappedResults);
};
