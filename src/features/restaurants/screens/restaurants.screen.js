import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Platform,
  StatusBar,
  SafeAreaView,
} from "react-native";
import { Searchbar } from "react-native-paper";
import { RestaurantInfo } from "../components/restaurant-info.components";
import styled from "styled-components/native";

const SearchComponent = styled.View`
  padding: ${(props) => props.theme.sizes[3]};
`;

const RestaurantList = styled.View`
  flex: 1;
  padding: ${(props) => props.theme.sizes[3]};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

export const RestaurantsScreen = () => {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <SearchComponent>
          <Searchbar />
        </SearchComponent>
        <RestaurantList>
          <RestaurantInfo></RestaurantInfo>
        </RestaurantList>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  search: {
    padding: 16,
  },
  list: {
    flex: 1,
    padding: 16,
    backgroundColor: "blue",
  },
});
