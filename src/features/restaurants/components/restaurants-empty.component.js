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
  return <Text>No Restaurants Found</Text>;
};
