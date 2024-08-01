import React, { useContext, useState } from "react";
import {
  StyleSheet,
  StatusBar,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { RestaurantInfoCard } from "../components/restaurant-info.components";
import styled from "styled-components/native";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import { FavouritesContext } from "../../../services/favourites/favourites.context";
import { FavouritesBar } from "../../../components/favourites/favourites-bar.component";
import { ActivityIndicator, Colors } from "react-native-paper";
import { Search } from "../components/search.component";
import { FadeInView } from "../../../components/animations/fade.animation";
import { NoRestaurantsComponent } from "../components/restaurants-empty.component";

const RestaurantList = styled.View`
  flex: 1;
  padding: ${(props) => props.theme.sizes[3]};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

export const RestaurantsScreen = ({ navigation }) => {
  const { restaurants, isLoading, error } = useContext(RestaurantsContext);
  const { favourites } = useContext(FavouritesContext);

  return (
    <>
      <SafeAreaView style={styles.container}>
        <Search />
        <FavouritesBar
          favourites={favourites}
          onNavigate={navigation.navigate}
        ></FavouritesBar>
        {isLoading && (
          <ActivityIndicator
            animating={true}
            color="#999999"
          ></ActivityIndicator>
        )}
        <FlatList
          data={restaurants}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("RestaurantDetail", {
                    restaurant: item,
                  })
                }
              >
                <FadeInView>
                  <RestaurantInfoCard restaurant={item} />
                </FadeInView>
              </TouchableOpacity>
            );
          }}
          keyExtractor={(item) => item.name}
          contentContainerStyle={{ padding: 16 }}
          ListEmptyComponent={!isLoading && NoRestaurantsComponent}
        />
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
