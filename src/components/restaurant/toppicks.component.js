import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { Spacer } from "../spacer/spacer.component";
import CompactRestaurantInfo from "./compact-restaurant-info.component";
import { Carousel } from "./carousel.component";

export const TopPicks = ({ onNavigate }) => {
  const renderItem = ({ item, index }) => {
    return (
      <Spacer position="left">
        <CompactRestaurantInfo restaurant={null} />
      </Spacer>
    );
  };

  const renderCaption = () => {
    const captionAction = () => {
      onNavigate("Account");
    };

    return (
      <View style={{ paddingHorizontal: 20, paddingTop: 10 }}>
        <Text style={{ fontSize: 50 }} numberOfLines={2}>
          EVEN BIGGER
        </Text>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "baseline",
            width: "100%",
          }}
        >
          <Text style={{ fontSize: 30 }}>NEXT TITLE</Text>
          <TouchableOpacity onPress={captionAction}>
            <Text
              style={{
                fontSize: 15,
                fontWeight: "bold",
                textDecorationLine: "underline",
              }}
            >
              go to account
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
        renderItem={renderItem}
        data={[0, 1, 2, 3, 4, 5, 6, 1, 1, 1, 1, 1, 1, 1]}
      ></Carousel>
    </>
  );
};
