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
        <Text
          style={{
            padding: 20,
            paddingBottom: 40,
            textAlign: "justify",
          }}
        >
          Many of us find difficulties to get the correct prayer times in
          Uppsala specially during the summer time. All the Apps show different
          times then the Uppsala Mosque. This is because, those Apps calculate
          prayer times based on other methods which are often not correct in
          Uppsala when the Sun stays very long during the summer. So here is a
          simple mobile app to show prayer times based on Uppsala, Sweden.
        </Text>
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <Text>Build with love by </Text>
          <Text h4>Mohammad Hafijur Rahman</Text>
          <Text>mail4hafij@gmail.com</Text>
        </View>
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
    backgroundColor: "#ffffff",
  },
});
