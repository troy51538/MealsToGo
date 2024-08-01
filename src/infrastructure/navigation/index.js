import React, { useContext } from "react";
import { AppNavigator } from "./app.navigator";
import { AccountNavigator } from "./account.navigator";
import { AuthenticationContext } from "../../services/authentication/authentication.context";
import { NavigationContainer } from "@react-navigation/native";

export const Navigation = () => {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
};
