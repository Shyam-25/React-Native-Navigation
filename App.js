import React, { useState } from 'react';  
import {StyleSheet,Text,View,TextInput, Button} from 'react-native';  
  
export default function App() {
  const [name, setName] = useState('Shyam');
  const [person, setPerson] = useState({ name: 'Ashwin', age:'21'});

  const clickHandler = () => {
    setName('Sundar');
    setPerson({ name:'Warner', age:'33'});
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>My name is {name}</Text>
      <Text>His name is {person.name} and his age is{person.age}</Text>
      <View style={styles.buttonContainer}>
        <Button title='Update State' onPress={clickHandler} />
      </View>
    </View>
  )
}
    
    
const styles = StyleSheet.create({  
    container: {  
      flex: 1,  
      justifyContent: 'center',  
      alignItems: 'center', 
      backgroundColor: '#fff' 
    },
    buttonContainer:{
      marginTop: 20
    },
    text:{
      fontSize:20,
      fontWeight:'bold'
    }
});
