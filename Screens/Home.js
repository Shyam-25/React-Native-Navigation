import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

function Home(props) {
   
  const { navigation } = props;
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home Screen</Text>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'pink'
  },
  text: {
    color: '#101010',
    fontSize: 30,
    fontWeight: 'bold'
  }
  
});

export default Home;


