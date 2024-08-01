import React, { useState, useContext, useEffect } from "react";
import {
  AccountBackground,
  AccountCover,
  AccountContainer,
  AuthInput,
  AuthButton,
  ErrorContainer,
  Title,
} from "../components/account.styles";
import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { ActivityIndicator } from "react-native-paper";
import { CommonActions } from "@react-navigation/native";

export const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { onLogin, isLoading, error, isAuthenticated } = useContext(
    AuthenticationContext
  );

  const handleLogin = () => {
    onLogin(email, password);
  };

  useEffect(() => {
    if (isAuthenticated) {
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{ name: "Settings" }],
        })
      );
      navigation.navigate("Restaurants");
    }
  }, [isAuthenticated]);
  return (
    <AccountBackground>
      <AccountCover />
      <Title>Meals To Go</Title>
      <Spacer size="large"></Spacer>

      <AccountContainer>
        <AuthInput
          label="Email"
          mode="outlined"
          value={email}
          textContentType="emailAddress"
          keyboardType="email-address"
          autoCapitalize="none"
          onChangeText={setEmail}
        ></AuthInput>
        <Spacer size="large" />
        <AuthInput
          label="Password"
          mode="outlined"
          value={password}
          textContentType="password"
          secureTextEntry
          autoCapitalize="none"
          onChangeText={setPassword}
        ></AuthInput>
        <Spacer size="large" />
        {error && (
          <ErrorContainer size="large">
            <Text variant="error">{error}</Text>
          </ErrorContainer>
        )}
        {!isLoading ? (
          <AuthButton
            icon="lock-open-outline"
            mode="contained"
            onPress={handleLogin}
          >
            LOGIN
          </AuthButton>
        ) : (
          <ActivityIndicator animating={true} color="blue" />
        )}
      </AccountContainer>
      <Spacer size="large">
        <AuthButton
          mode="contained"
          onPress={() => navigation.navigate("Register")}
        >
          Sign up
        </AuthButton>
      </Spacer>
    </AccountBackground>
  );
};
