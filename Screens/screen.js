import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

function Screen(props) {
   
  const { navigation } = props;
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to Screen</Text>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green'
  },
  text: {
    color: '#101010',
    fontSize: 30,
    fontWeight: 'bold'
  }
  
});

export default Screen;