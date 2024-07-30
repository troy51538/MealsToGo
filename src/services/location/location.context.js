import React, { useState, useEffect } from "react";
import {
  locationRequest,
  locationTransform,
  reverseGeocodeRequest,
} from "./location.service";
import * as Location from "expo-location";
import camelize from "camelize";
export const LocationContext = React.createContext();

export const LocationContextProvider = ({ children }) => {
  const [permission, requestPermission] = Location.useForegroundPermissions();
  const [keyword, setKeyword] = useState("");
  const [location, setLocation] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getLocation = async () => {
      try {
        let { status } = await Location.requestForegroundPermissionsAsync();

        if (permission && permission.status !== "granted") {
          let { status } = await Location.requestForegroundPermissionsAsync();
          setKeyword("San Francisco");
          return;
        }

        let location = await Location.getCurrentPositionAsync({});

        reverseGeocodeRequest(
          location.coords.latitude + "," + location.coords.longitude
        ).then((result) => {
          const formattedResponse = camelize(result);
          formattedResponse.results.forEach((element) => {
            if (element.types.includes("street_address")) {
              setKeyword(element.addressComponents[2].longName);
            }
          });
        });
      } catch (error) {
        console.error("Error requesting location permission:", error);
      }
    };
    getLocation();
  }, []);

  const onSearch = (searchKeyword) => {
    console.log(searchKeyword);
    setIsLoading(true);
    setKeyword(searchKeyword);
  };

  useEffect(() => {
    if (!keyword.length) {
      return;
    }

    locationRequest(keyword.toLowerCase())
      .then(locationTransform)
      .then((result) => {
        setIsLoading(false);
        setLocation(result);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err);
      });
  }, [keyword]);

  return (
    <LocationContext.Provider
      value={{
        isLoading,
        error,
        location,
        search: onSearch,
        keyword,
      }}
    >
      {children}
    </LocationContext.Provider>
  );
};
