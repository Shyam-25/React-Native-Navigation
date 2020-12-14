import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

function Details(props) {
    const { route } = props;
    const { item } = route.params;
    const { name, home  } = item;
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Detail Screen</Text>
        <View style={styles.card}>
          <Text style={styles.cardText}>Name: {name}</Text>
          <Text style={styles.cardText}>Native : {home}</Text>
          {/* <Text style={styles.cardText}>Species: {species}</Text> */}
        </View>
      </View>
    );
  }
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'grey'
    },
    text: {
      color: '#101010',
      fontSize: 24,
      fontWeight: 'bold',
      backgroundColor:'#fff'
    },
    card: {
      width: 250,
      height: 70,
      borderRadius: 10,
      backgroundColor: 'white',
      margin: 10,
      padding: 10,
      alignItems: 'center'
    },
    cardText: {
      fontSize: 18,
      color: 'white',
      marginBottom: 5,
      backgroundColor:'#000'
    }
  });

export default Details;

