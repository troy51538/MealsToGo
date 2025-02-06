import React, { useContext, useEffect, useState } from "react";
import {
  StyleSheet,
  StatusBar,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  View,
  ScrollView,
  Text,
  Button,
} from "react-native";
import { RestaurantInfoCard } from "../components/restaurant-info.components";
import styled from "styled-components/native";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import { FavouritesContext } from "../../../services/favourites/favourites.context";
import { FavouritesBar } from "../../../components/favourites/favourites-bar.component";
import { ActivityIndicator } from "react-native-paper";
import { Search } from "../components/search.component";
import { FadeInView } from "../../../components/animations/fade.animation";
import { NoRestaurantsComponent } from "../components/restaurants-empty.component";
import { TopPicks } from "../../../components/restaurant/toppicks.component";
import { OrderButton } from "../../../components/restaurant/order-button.component";
import { OrderAgain } from "../../../components/restaurant/order-again.component";

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

        <ScrollView>
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

          <View
            style={{
              borderColor: "blue",
              borderWidth: 2,
              marginBottom: 30,
            }}
          >
            <OrderAgain></OrderAgain>
          </View>

          <View
            style={{
              borderColor: "blue",
              borderWidth: 2,
              marginBottom: 30,
            }}
          >
            <TopPicks
              onNavigate={navigation.navigate}
              isLoading={false}
            ></TopPicks>
          </View>

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
        </ScrollView>

        <OrderButton></OrderButton>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: StatusBar.currentHeight,
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
