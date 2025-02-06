import React, { createContext, useState, useEffect, useContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthenticationContext } from "../authentication/authentication.context";
export const FavouritesContext = createContext();

export const FavouritesContextProvider = ({ children }) => {
  const { user, isAuthenticated } = useContext(AuthenticationContext);

  const [favourites, setFavourites] = useState([]);
  const saveFavourites = async (value, uid) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(`@favourites-${uid}`, jsonValue);
    } catch (e) {
      console.log("error storing", e);
    }
  };

  const loadFavourites = async (uid) => {
    try {
      const value = await AsyncStorage.getItem(`@favourites-${uid}`);
      if (value !== null && value !== undefined) {
        console.log(JSON.parse(value));
        setFavourites(JSON.parse(value));
      } else {
        setFavourites([]);
      }
    } catch (e) {
      console.log("error loading", e);
    }
  };
  const add = (restaurant) => {
    setFavourites([...favourites, restaurant]);
  };

  const remove = (restaurant) => {
    favourites.forEach((x) => console.log(x.placeId));
    const newFavourites = favourites.filter(
      (x) => x.placeId !== restaurant.placeId
    );
    setFavourites(newFavourites);
  };

  useEffect(() => {
    if (isAuthenticated) {
      loadFavourites(user.uid);
    } else {
      loadFavourites("guest");
    }
  }, [user]);

  useEffect(() => {
    if (isAuthenticated && favourites.length) {
      saveFavourites(favourites, user.uid);
    } else {
      saveFavourites(favourites, "guest");
    }
  }, [favourites]);

  return (
    <FavouritesContext.Provider
      value={{
        favourites: favourites,
        addToFavourites: add,
        removeFromFavourites: remove,
      }}
    >
      {children}
    </FavouritesContext.Provider>
  );
};
