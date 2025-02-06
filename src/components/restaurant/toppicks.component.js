import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { Spacer } from "../spacer/spacer.component";
import CompactRestaurantInfo from "./compact-restaurant-info.component";
import { Carousel } from "./carousel.component";

export const TopPicks = ({ onNavigate, isLoading = false, data = null }) => {
  const renderItem = ({ item, index }) => {
    return (
      <Spacer position="left">
        <CompactRestaurantInfo />
      </Spacer>
    );
  };

  const renderCaption = () => {
    const captionAction = () => {
      onNavigate("Account");
    };

    return (
      <View style={{ paddingHorizontal: 20, paddingTop: 10 }}>
        <Text style={{ fontSize: 50, fontStyle: "italic" }} numberOfLines={2}>
          Indulge with
        </Text>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "baseline",
            width: "100%",
          }}
        >
          <Text style={{ fontSize: 30 }}>Top Picks</Text>
          <TouchableOpacity onPress={captionAction}>
            <Text
              style={{
                fontSize: 15,
                fontWeight: "bold",
                textDecorationLine: "underline",
              }}
            >
              View Full Menu
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <>
      {/* background part */}
      <View
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 230,
          backgroundColor: "red",
        }}
      />

      {/* horizontal scroll part */}
      <Carousel
        renderCaption={renderCaption}
        data={data ? data : [0, 1, 2, 3, 4, 5, 6, 1, 1, 1, 1, 1, 1, 1]}
        renderItem={renderItem}
      ></Carousel>
    </>
  );
};
