import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text } from 'react-native';

const DATA = [
  {
    id: '1',
    title: 'Cricket',
  },
  {
    id: '2',
    title: 'Football',
  },
  {
    id: '3',
    title: 'Volleyball',
  },
  {
    id: '4',
    title: 'baseball',
  },
  {
    id: '5',
    title: 'kabadi',
  },
  {
    id: '6',
    title: 'Hockey',
  },
  {
    id: '7',
    title: 'chess',
  },
  {
    id: '8',
    title: 'boxing',
  }
];

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const App = () => {
  const renderItem = ({ item }) => (
    <Item title={item.title} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
    backgroundColor: 'grey'
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 18,
    marginHorizontal: 26,
  },
  title: {
    fontSize: 32
    
  },
});

export default App;