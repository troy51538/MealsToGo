import React, { useState, useEffect } from "react";
import { Navigation } from "./src/infrastructure/navigation";

import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import firebase from "firebase/compat/app";

import { ThemeProvider } from "styled-components";
import { theme } from "./src/infrastructure/theme";
import { RestaurantsContextProvider } from "./src/services/restaurants/restaurants.context";
import { LocationContextProvider } from "./src/services/location/location.context";
import { FavouritesContextProvider } from "./src/services/favourites/favourites.context";
import { AuthenticationContextProvider } from "./src/services/authentication/authentication.context";

const firebaseConfig = {
  apiKey: "AIzaSyAlaBQiB3s_-T8uNgCbKjx87QLbi9pHDjI",
  authDomain: "mealstogo-c4448.firebaseapp.com",
  projectId: "mealstogo-c4448",
  storageBucket: "mealstogo-c4448.appspot.com",
  messagingSenderId: "250313286199",
  appId: "1:250313286199:web:36d11f54106e09054155b2",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default function App() {
  let [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });
  let [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) return null;

  return (
    <ThemeProvider theme={theme}>
      <AuthenticationContextProvider>
        <FavouritesContextProvider>
          <LocationContextProvider>
            <RestaurantsContextProvider>
              <Navigation />
            </RestaurantsContextProvider>
          </LocationContextProvider>
        </FavouritesContextProvider>
      </AuthenticationContextProvider>
    </ThemeProvider>
  );
}
