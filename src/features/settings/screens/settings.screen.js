import React, { useContext, useState } from "react";
import { List, Avatar } from "react-native-paper";
import { Text } from "../../../components/typography/text.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import styled from "styled-components/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";
import { colors } from "../../../infrastructure/theme/colors";

export const SettingsBackground = styled.ImageBackground.attrs({
  source: require("../../../../assets/home_bg.jpg"),
})`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const SettingsContainer = styled.View`
  background-color: rgba(255, 255, 255, 0.7);
  position: absolute;
  width: 100%;
  height: 100%;
`;

const SettingsItem = styled(List.Item)`
  padding: ${(props) => props.theme.space[3]};
`;

const AvatarContainer = styled.View`
  align-items: center;
`;

export const SettingsScreen = ({ navigation }) => {
  const { onLogout, user } = useContext(AuthenticationContext);
  const [photo, setPhoto] = useState(null);

  const getProfilePicture = async (currentUser) => {
    const photoUri = await AsyncStorage.getItem(`${currentUser.uid}-photo`);
    setPhoto(photoUri);
  };

  useFocusEffect(() => {
    getProfilePicture(user);
  });

  return (
    <SafeAreaView style={styles.container}>
      <SettingsBackground>
        <SettingsContainer>
          <AvatarContainer>
            <TouchableOpacity onPress={() => navigation.navigate("Camera")}>
              {!photo && (
                <Avatar.Icon
                  size={180}
                  icon="human"
                  backgroundColor={colors.brand.primary}
                />
              )}
              {photo && (
                <Avatar.Image
                  size={180}
                  source={{ uri: photo }}
                  backgroundColor="#2182BD"
                />
              )}
            </TouchableOpacity>
            <Spacer position="top" size="large">
              <Text variant="label">{user.email}</Text>
            </Spacer>
          </AvatarContainer>

          <List.Section>
            <SettingsItem
              style={{ padding: 16 }}
              title="Favourites"
              description="View your favourites"
              left={(props) => (
                <List.Icon {...props} color={colors.ui.error} icon="heart" />
              )}
              onPress={() => navigation.navigate("Favourites")}
            />
            <SettingsItem
              style={{ padding: 16 }}
              title="Logout"
              left={(props) => (
                <List.Icon {...props} color={colors.ui.secondary} icon="door" />
              )}
              onPress={onLogout}
            />
          </List.Section>
        </SettingsContainer>
      </SettingsBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
    alignContent: "center",
  },
});
