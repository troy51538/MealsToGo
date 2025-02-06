import React from "react";
import { Carousel } from "./carousel.component";
import { View, TouchableOpacity, Text } from "react-native";
import { Spacer } from "../spacer/spacer.component";
import CompactRestaurantInfo from "./compact-restaurant-info.component";

export const OrderAgain = ({ data = null }) => {
  const renderCaption = () => {
    const captionAction = () => {};

    return (
      <View style={{ paddingHorizontal: 20, paddingTop: 10 }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "baseline",
            width: "100%",
          }}
        >
          <Text style={{ fontSize: 30 }}>Order Again</Text>
          <TouchableOpacity onPress={captionAction}>
            <Text
              style={{
                fontSize: 15,
                fontWeight: "bold",
                textDecorationLine: "underline",
              }}
            >
              View All
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  const renderItem = ({ item, index }) => {
    return (
      <Spacer position="left">
        <CompactRestaurantInfo />
      </Spacer>
    );
  };

  return (
    <Carousel
      renderCaption={renderCaption}
      data={data ? data : [0, 1, 2, 3, 4, 5, 6, 1, 1, 1, 1, 1, 1, 1]}
      renderItem={renderItem}
    ></Carousel>
  );
};
