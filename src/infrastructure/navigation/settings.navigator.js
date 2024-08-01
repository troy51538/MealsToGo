import React from "react";
import { SettingsScreen } from "../../features/settings/screens/settings.screen";
import { CameraScreen } from "../../features/settings/screens/camera.screen";
import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import { FavouritesScreen } from "../../features/settings/screens/favourites.screen";
import { AccountScreen } from "../../features/account/screens/account.screen";
import { LoginScreen } from "../../features/account/screens/login.screen";
import { RegisterScreen } from "../../features/account/screens/register.screen";

const SettingsStack = createStackNavigator();

export const SettingsNavigator = ({ route, navigation }) => {
  return (
    <SettingsStack.Navigator
      headerMode="screen"
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
    >
      <SettingsStack.Screen
        options={{
          header: () => null,
        }}
        name="Settings"
        component={SettingsScreen}
      />
      <SettingsStack.Screen name="Favourites" component={FavouritesScreen} />
      <SettingsStack.Screen name="Camera" component={CameraScreen} />
      <SettingsStack.Screen name="Main" component={AccountScreen} />
      <SettingsStack.Screen name="Login" component={LoginScreen} />
      <SettingsStack.Screen name="Register" component={RegisterScreen} />
    </SettingsStack.Navigator>
  );
};
