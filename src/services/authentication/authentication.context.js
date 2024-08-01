import { loginRequest, registerRequest } from "./authentication.service";
import React, { useState, createContext, useRef, useEffect } from "react";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";

export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  const auth = useRef(getAuth()).current;

  // onAuthStateChanged(auth, (user) => {
  //   if (user) {
  //     setUser(user);
  //     setIsLoading(false);
  //   } else {
  //     setIsLoading(false);
  //   }
  // });

  const onLogin = (email, password) => {
    setIsLoading(true);
    loginRequest(email, password)
      .then((u) => {
        setUser(u.user);
        setIsLoading(false);
      })
      .catch((e) => {
        setIsLoading(false);
        setError(e.toString());
      });
  };

  const onRegister = (email, password, repeatedPassword) => {
    setIsLoading(true);
    if (password !== repeatedPassword) {
      setError("Error: Passwords do not match");
      return;
    }
    registerRequest(email, password)
      .then((u) => {
        setUser(u.user);
        setIsLoading(false);
      })
      .catch((e) => {
        setError(e.toString());
        setIsLoading(false);
      });
  };

  const onLogout = () => {
    const auth = getAuth();
    setIsLoading(true);

    setTimeout(() => {
      signOut(auth)
        .then(() => {
          setUser(null);
          setError(null);
        })
        .catch((e) => {});
      setIsLoading(false);
    }, 500);
  };

  return (
    <AuthenticationContext.Provider
      value={{
        isAuthenticated: !!user,
        user,
        isLoading,
        error,
        onLogin,
        onRegister,
        onLogout,
        setError,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
