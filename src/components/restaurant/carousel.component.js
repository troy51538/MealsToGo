import React from "react";
import { FlatList } from "react-native";

export const Carousel = ({ renderItem, renderCaption, data = null }) => {
  return (
    <>
      {renderCaption()}
      <FlatList
        horizontal
        data={data}
        renderItem={renderItem}
        contentContainerStyle={{ padding: 16 }}
      />
    </>
  );
};
