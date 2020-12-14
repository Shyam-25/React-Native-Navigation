import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

function Details(props) {

    return (
        <View style={styles.container}>
        <Text style={styles.text}>Welcome to Detail Part</Text>
      </View>
    );
  }
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'blue'
    },
    text: {
      color: '#fff',
      fontSize: 30,
      fontWeight: 'bold'
    }
    
  });

export default Details;
