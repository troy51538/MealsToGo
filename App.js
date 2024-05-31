import { StyleSheet, Text, View, SafeAreaView, Platform, StatusBar } from 'react-native';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import React from 'react';

export default function App() {
  return (
    <>
    <SafeAreaView style={styles.container}>
      <View style={styles.container1}>
        <Text>asdfasd</Text>
      </View>
      <View style={styles.container2}>
        <Text>asdfasd</Text>
      </View>
    </SafeAreaView >
    <ExpoStatusBar style="auto" /> 
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  container1: {
    padding: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: 'green'
  },
  container2: {
    flex: 1,
    padding: 20,
    backgroundColor: 'blue'
  }
});
