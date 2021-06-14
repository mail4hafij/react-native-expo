import React from "react";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native-elements";

export default function InfoScreen() {
  return (
    <>
      <View style={styles.header}>
        <Text style={{ paddingTop: 20 }}>Information</Text>
      </View>
      <View style={styles.container}>
        <Text>Build with love by </Text>
        <Text h4>Mohammad Hafijur Rahman</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: "10%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#eee",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ffffff",
  },
});
