import React, { useState,useEffect} from 'react';
import{Button,StyleSheet,TextInput,View,Text} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

 const STORAGE_KEY = '@save_name'
 const App =()=> {
 
    const [name, setName] = useState('')
    const saveData = async () => {
        try {
          await AsyncStorage.setItem(STORAGE_KEY, name)
          alert('Data successfully saved')
        } catch (e) {
          alert('Failed to save the data to the storage')
        }
      }
    const readData = async () => {
        try {
          const userName = await AsyncStorage.getItem(STORAGE_KEY)
      
          if (userName !== null) {
            setName(userName)
          }
        } catch (e) {
          alert('Failed to fetch the data from storage')
        }
    }
    const clearStorage = async () => {
        try {
          await AsyncStorage.clear()
          alert('Storage successfully cleared!')
        } catch (e) {
          alert('Failed to clear the async storage.')
        }
    }
    const onChangeText = userName => setName(userName)

    const onSubmitEditing = () => {
        if (!name) return 
        saveData(name)
       
        setName('')
    }
    useEffect(() => {
    readData()
    }, [])
    return(
      <View style={styles.container}>
          <TextInput style={styles.textInput} value={name}
          placeholder='Enter your Name' onChangeText={onChangeText}
          onSubmitEditing={onSubmitEditing}/>
          <Button title='Clear' onPress={clearStorage}/>
          <Text style={styles.text}>Your Name is {name}</Text>
      </View>
    );

};

const styles= StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        padding:20,
        backgroundColor: 'pink'
    },
    textInput:{
        borderColor:'black',
        borderWidth:1,
        width:150,
        marginBottom:30,
    },
    text: {
        fontSize: 24,
        padding: 10,
        backgroundColor: '#fff',
        fontWeight:'bold'
    },
})
export default App;