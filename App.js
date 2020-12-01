import React from "react";
import { StyleSheet, Text, View, SafeAreaView, SectionList } from "react-native";



const DATA = [
  {
    title: "Food",
    data: ["Meals", "Dosa", "Idly"]
  },
  {
    title: "Ice Cream",
    data: ["Chocolate", "Grape-Nut", "Blue-Moon"]
  },
  {
    title: "Vegetable",
    data: ["Tomato", "Carrot", "Beans"]
  },
  {
    title: "Drinks",
    data: ["Water", "Coke", "Fanta"]
  }
];

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const App = () => (
  <SafeAreaView style={styles.container}>
    <SectionList
      sections={DATA}
      keyExtractor={(item, index) => item + index}
      renderItem={({ item }) => <Item title={item} />}
      renderSectionHeader={({ section: { title } }) => (
        <Text style={styles.header}>{title}</Text>
      )}
    />
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    marginHorizontal: 16
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8
  },
  header: {
    fontSize: 32,
    backgroundColor: "#000",
    backgroundColor: "#a52a2a"
  },
  title: {
    fontSize: 22
  }
});

export default App;