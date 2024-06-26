import {
  AccountBackground,
  AccountCover,
  AccountContainer,
  AuthButton,
  Title,
} from "../components/account.styles";
import { Spacer } from "../../../components/spacer/spacer.component";
import LottieView from "lottie-react-native";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { useFocusEffect } from "@react-navigation/native";
import { useContext } from "react";

export const AccountScreen = ({ navigation }) => {
  const { setError } = useContext(AuthenticationContext);

  useFocusEffect(() => {
    setError("");
  });

  return (
    <AccountBackground>
      <AccountCover />
      <LottieView
        style={{
          width: "100%",
          height: "40%",
          position: "absolute",
          padding: `${(props) => props.theme.spaces[2]}`,
          top: 30,
        }}
        key="animation"
        autoPlay
        loop
        resizeMode="cover"
        source={require("../../../../assets/watermelon.json")}
      />
      <Title>Meals To Go</Title>
      <Spacer size="large"></Spacer>
      <AccountContainer>
        <AuthButton
          icon="lock-open-outline"
          mode="contained"
          onPress={() => navigation.navigate("Login")}
        >
          LOGIN
        </AuthButton>
        <Spacer size="large" />
        <AuthButton
          icon="email"
          mode="contained"
          onPress={() => navigation.navigate("Register")}
        >
          REGISTER
        </AuthButton>
      </AccountContainer>
    </AccountBackground>
  );
};
