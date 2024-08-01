import React, { useContext, useState, useEffect } from "react";
import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";
import { LocationContext } from "../../../services/location/location.context";
import * as Location from "expo-location";
import { reverseGeocodeRequest } from "../../../services/location/location.service";
import { isMock } from "../../../utils/env";

const SearchComponent = styled.View`
  padding: ${(props) => props.theme.sizes[3]};
`;

export const Search = ({}) => {
  const [permission, requestPermission] = Location.useForegroundPermissions();
  const { keyword, search } = useContext(LocationContext);
  const [searchKeyword, setSearchkeyword] = useState(keyword);
  const [isUsingCurrentLocation, setIsUsingCurrentLocation] = useState(false);

  useEffect(() => {
    setSearchkeyword(keyword);
  }, [keyword]);

  const getCurrentLocation = async () => {
    if (!isMock) {
      try {
        let { status } = await Location.requestForegroundPermissionsAsync();

        if (permission && permission.status !== "granted") {
          let { status } = await Location.requestForegroundPermissionsAsync();
          setSearchkeyword("San Francisco");
          return;
        }

        let location = await Location.getCurrentPositionAsync({});

        reverseGeocodeRequest(
          location.coords.latitude + "," + location.coords.longitude
        ).then((result) => {
          const formattedResponse = camelize(result);
          formattedResponse.results.forEach((element) => {
            if (element.types.includes("street_address")) {
              setSearchkeyword(element.addressComponents[2].longName);
            }
          });
        });
      } catch (error) {
        console.error("Error requesting location permission:", error);
      }
    } else {
      setSearchkeyword("San Francisco");
    }
    setIsUsingCurrentLocation(true);
  };

  useEffect(() => {
    if (isUsingCurrentLocation) {
      search(searchKeyword);
      setIsUsingCurrentLocation(false);
    }
  }, [isUsingCurrentLocation]);

  return (
    <SearchComponent>
      <Searchbar
        icon={"target"}
        onIconPress={getCurrentLocation}
        placeholder="Search for a location"
        value={searchKeyword}
        onSubmitEditing={() => {
          search(searchKeyword);
        }}
        onChangeText={(text) => {
          setSearchkeyword(text);
        }}
      />
    </SearchComponent>
  );
};
