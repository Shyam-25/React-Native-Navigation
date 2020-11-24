import React from "react";
import { View, Text } from "react-native";

const ViewBoxesWithColorAndText = () => {
  return (
    <View
      // eslint-disable-next-line react-native/no-inline-styles
      style={{
        flexDirection: "row",
        height: 100,
        padding: 20
      }}
    >
      <View style={{ backgroundColor: "blue", flex: 1 }} />
      <View style={{ backgroundColor: "red", flex: 0.8 }} />
      <Text>Good !</Text>
    </View>
  );
};

export default ViewBoxesWithColorAndText;