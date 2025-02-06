import React from "react";
import { View, Button } from "react-native";

export const OrderButton = () => {
  return (
    <View
      style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: "transparent",
        paddingTop: 30,
        paddingHorizontal: 16,
        paddingBottom: 10,
        marginHorizontal: 10,
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <View
        style={{
          width: "100%",
          backgroundColor: "lightblue",
        }}
      >
        <Button title="BUTTTTTTTTTOOOOOOON" onPress={null}></Button>
      </View>
    </View>
  );
};
