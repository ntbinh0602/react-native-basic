import React from "react";
import { StyleSheet, View, Text } from "react-native";

const Sandbox = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.boxOne}>one</Text>
      <Text style={styles.boxTwo}>two</Text>
      <Text style={styles.boxThree}>three</Text>
      <Text style={styles.boxFour}>four</Text>
    </View>
  );
};

export default Sandbox;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    paddingTop: 40,
    backgroundColor: "#ddd",
    alignItems: "center",
  },

  boxOne: {
    flex: 1,
    padding: 10,
    backgroundColor: "violet",
  },

  boxTwo: {
    flex: 2,
    padding: 20,
    backgroundColor: "gold",
  },

  boxThree: {
    flex: 1,
    padding: 30,
    backgroundColor: "coral",
  },

  boxFour: {
    flex: 3,
    padding: 40,
    backgroundColor: "skyblue",
  },
});
