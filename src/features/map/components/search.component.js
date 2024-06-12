import React, { useContext, useState, useEffect } from "react";
import { SafeAreaView } from "react-native";
import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";
import { LocationContext } from "../../../services/location/location.context";

const SearchComponent = styled.View`
  padding: ${(props) => props.theme.sizes[3]};
  position: absolute;
  z-index: 999;
  top: 30px;
  width: 100%;
`;

export const Search = () => {
  const { keyword, search } = useContext(LocationContext);
  const [searchKeyword, setSearchkeyword] = useState(keyword);

  useEffect(() => {
    setSearchkeyword(keyword);
  }, [keyword]);

  return (
    <SafeAreaView>
      <SearchComponent>
        <Searchbar
          icon="map"
          placeholder="Search for a location"
          value={searchKeyword}
          onSubmitEditing={() => {
            search(searchKeyword);
          }}
          onChangeText={(text) => {
            setSearchkeyword(text);
          }}
        />
      </SearchComponent>
    </SafeAreaView>
  );
};
