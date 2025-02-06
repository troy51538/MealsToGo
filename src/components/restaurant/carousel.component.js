import React from "react";
import { FlatList } from "react-native";

export const Carousel = ({
  renderItem,
  renderCaption,
  data = null,
  keyExtractor = null,
}) => {
  return (
    <>
      {renderCaption()}
      <FlatList
        horizontal
        data={data}
        renderItem={renderItem}
        contentContainerStyle={{ padding: 16 }}
        keyExtractor={
          keyExtractor
            ? keyExtractor
            : (item, index) => {
                index.toString();
              }
        }
      />
    </>
  );
};
