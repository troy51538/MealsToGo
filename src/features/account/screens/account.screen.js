import {
  AccountBackground,
  AccountCover,
  AccountContainer,
  AuthButton,
  Title,
} from "../components/account.styles";
import { Spacer } from "../../../components/spacer/spacer.component";

export const AccountScreen = ({ navigation }) => {
  return (
    <AccountBackground>
      <AccountCover />
      <Title>Meals To Go</Title>
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
