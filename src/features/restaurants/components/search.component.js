import React, { useContext, useState, useEffect } from "react";
import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";
import { LocationContext } from "../../../services/location/location.context";

const SearchComponent = styled.View`
  padding: ${(props) => props.theme.sizes[3]};
`;

export const Search = () => {
  const { keyword, search } = useContext(LocationContext);
  const [searchKeyword, setSearchkeyword] = useState(keyword);

  useEffect(() => {
    setSearchkeyword(keyword);
  }, [keyword]);

  return (
    <SearchComponent>
      <Searchbar
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
  );
};
