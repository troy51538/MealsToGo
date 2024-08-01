import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components/native";
import { Searchbar } from "react-native-paper";

import { LocationContext } from "../../../services/location/location.context";
import { SafeAreaView } from "react-native";

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
  position: absolute;
  z-index: 999;
  top: 25px;
  width: 100%;
`;

export const Search = () => {
  const { keyword, search } = useContext(LocationContext);
  const [searchKeyword, setSearchKeyword] = useState(keyword);
  useEffect(() => {
    setSearchKeyword(keyword);
  }, [keyword]);
  return (
    <SearchContainer>
      <SafeAreaView>
        <Searchbar
          placeholder="Search for a location"
          icon="map"
          value={searchKeyword}
          onSubmitEditing={() => {
            search(searchKeyword);
          }}
          onChangeText={(text) => {
            setSearchKeyword(text);
          }}
        />
      </SafeAreaView>
    </SearchContainer>
  );
};
