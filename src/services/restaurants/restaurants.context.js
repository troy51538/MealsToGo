import React, {
  useState,
  createContext,
  useEffect,
  uesMemo,
  useContext,
} from "react";

import {
  restaurantsRequest,
  restaurantsTransform,
} from "./restaurants.service";
import { LocationContext } from "../location/location.context";

export const RestaurantsContext = createContext();

export const RestaurantsContextProvider = ({ children }) => {
  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { location } = useContext(LocationContext);

  const retrieveRestaurants = (location) => {
    setIsLoading(true);
    setRestaurants([]);
    setTimeout(() => {
      restaurantsRequest(location)
        .then(restaurantsTransform)
        .then((results) => {
          setIsLoading(false);
          setRestaurants(results);
        })
        .catch((err) => {
          setIsLoading(false);
          setError(err);
        });
    }, 2000);

    // restaurantsRequest(location)
    //   .then(restaurantsTransform)
    //   .then((results) => {
    //     setIsLoading(false);
    //     setRestaurants(results);
    //   })
    //   .catch((err) => {
    //     setIsLoading(false);
    //     setError(err);
    //   });
  };

  useEffect(() => {
    if (location) {
      const locationString = `${location.lat},${location.lng}`;
      retrieveRestaurants(locationString);
    }
  }, [location]);

  return (
    <RestaurantsContext.Provider
      value={{
        restaurants: restaurants,
        isLoading: isLoading,
        error: error,
      }}
    >
      {children}
    </RestaurantsContext.Provider>
  );
};
