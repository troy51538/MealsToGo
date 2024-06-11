import React, { useState, useContext } from "react";
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

export const RegisterScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatedPassword, setRepeatedPassword] = useState("");

  const { onRegister, isLoading, error } = useContext(AuthenticationContext);

  return (
    <AccountBackground>
      <AccountCover />
      <Title>Meals To Go</Title>
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
        <AuthInput
          label="Repeat Password"
          mode="outlined"
          value={repeatedPassword}
          textContentType="password"
          secureTextEntry
          autoCapitalize="none"
          onChangeText={setRepeatedPassword}
        ></AuthInput>
        <Spacer size="large" />
        {error && (
          <ErrorContainer size="large">
            <Text variant="error">{error}</Text>
          </ErrorContainer>
        )}
        {!isLoading ? (
          <AuthButton
            icon="mail"
            mode="contained"
            onPress={() => onRegister(email, password, repeatedPassword)}
          >
            REGISTER
          </AuthButton>
        ) : (
          <ActivityIndicator animating={true} color="blue" />
        )}
      </AccountContainer>
      <Spacer size="large">
        <AuthButton mode="contained" onPress={() => navigation.goBack()}>
          Back
        </AuthButton>
      </Spacer>
    </AccountBackground>
  );
};
