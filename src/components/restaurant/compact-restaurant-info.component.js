import React, { memo } from "react";
import styled from "styled-components/native";
import WebView from "react-native-webview";
import { Platform } from "react-native";

import { Text } from "../typography/text.component";

const CompactImage = styled.Image`
  border-radius: 10px;
  width: 120px;
  height: 200px;
`;

const CompactWebview = styled(WebView)`
  border-radius: 10px;
  width: 120px;
  height: 100px;
`;

const Item = styled.View`
  padding: 10px;
  max-width: 120px;
  align-items: center;
  border-radius: 10px;
`;

const isAndroid = Platform.OS === "android";

const CompactRestaurantInfo = ({ restaurant, isMap }) => {
  const Image = isAndroid && isMap ? CompactWebview : CompactImage;

  return (
    <Item>
      <Image
        source={{
          uri: restaurant
            ? restaurant.photos[0]
            : "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
        }}
      />
      <Text center variant="caption" numberOfLines={3}>
        {restaurant ? restaurant.name : "HI"}
      </Text>
    </Item>
  );
};
export default memo(CompactRestaurantInfo);
