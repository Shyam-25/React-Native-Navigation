import React, { useState } from "react";
import { Text, StyleSheet } from "react-native";

const onPressTitle = () => {
  console.log("title pressed");
};

const TextInANest = () => {
  const titleText = useState("NIVAR cyclone");
  const bodyText = useState("It is very likely to cross between Karaikal and Mamallapuram ");

  return (
    <Text style={styles.baseText}>
      <Text style={styles.titleText} onPress={onPressTitle}>
        {titleText}
        {"\n"}
        {"\n"}
      </Text>
      <Text numberOfLines={5}>{bodyText}</Text>
    </Text>
  );
};

const styles = StyleSheet.create({
  baseText: {
    fontFamily: "Times"
  },
  titleText: {
    fontSize: 40,
    fontWeight: "bold"
  }
});

export default TextInANest;
