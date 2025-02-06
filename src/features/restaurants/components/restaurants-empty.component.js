import React from "react";
import {
  FlatList,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Spacer } from "../../../components/spacer/spacer.component";
// import { CompactRestaurantInfo } from "../../../components/restaurant/compact-restaurant-info.component";
import CompactRestaurantInfo from "../../../components/restaurant/compact-restaurant-info.component.js";

export const NoRestaurantsComponent = () => {
  return (
    <>
      {/* entire container */}
      <View style={{ width: "100%", height: 500 }}>
        {/* purple top part container */}
        <View style={{ height: "30%", backgroundColor: "purple" }}>
          <View>
            <Text style={{ margin: 5, fontSize: 50 }} numberOfLines={2}>
              TESTINGSSSSSSSSSSSSSSSSSSS
            </Text>
          </View>
        </View>

        {/* empty bottom part container */}
        <View
          style={{ height: "70%", borderWidth: 1, borderColor: "red" }}
        ></View>
        <FlatList
          horizontal
          style={{ position: "absolute", top: "25%" }}
          data={[0, 1, 2, 3, 4, 5, 6, 1, 1, 1, 1, 1, 1, 1]}
          renderItem={(item) => {
            return (
              <Spacer position="left">
                <CompactRestaurantInfo restaurant={null} />
              </Spacer>
            );
          }}
        ></FlatList>
      </View>
      <FlatList
        data={[0, 1, 2, 3, 4, 5, 6, 1, 1, 1, 1, 1, 1, 1]}
        renderItem={(item) => {
          return (
            <Spacer position="left">
              <CompactRestaurantInfo restaurant={null} />
            </Spacer>
          );
        }}
      ></FlatList>
    </>
    // return <Text>No Restaurants Found</Text>;
  );
};
