import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
      <TouchableOpacity onPress={this.saveData}>
        <Text style={{fontSize:25}}>Save Data</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={this.displayData}>
        <Text style={{fontSize:25}}>Display Data</Text>
        </TouchableOpacity>

      </View>
    );
  }
  saveData() {
    let obj = {
      name: 'Shyam Sundar',
      City: 'Chennai',
      department: 'Mobility'
    }
    AsyncStorage.setItem('user', JSON.stringify(obj));
    
  } 
  displayData = async () => {
    try {
      let user = await AsyncStorage.getItem('User');
      let parsed = JSON.parse(user);
      alert(parsed.City);

    }

    catch(error) {
      alert(error);

    }
  }
}



const styles = StyleSheet.create ({
  container: {
    flex:1,
    backgroundColor: 'pink',
    alignItems : 'center',
    justifyContent: 'center'
  },
});