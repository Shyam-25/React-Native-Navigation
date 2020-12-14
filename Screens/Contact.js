import React from "react";
import { View, StyleSheet, Text } from "react-native";

const Contact = () => {
  return (
    <View style={styles.center}>
      <Text style={styles.container}>This is the contact screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  container: {
    fontSize: 30,
    fontWeight: 'bold'
  }
});

export default Contact;