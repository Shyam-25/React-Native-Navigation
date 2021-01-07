import React, { Component } from 'react';
import { StyleSheet,Text, TextInput, View, Button, TouchableOpacity } from 'react-native';

export default class App extends Component{
  constructor(props){
    super(props);
     this.state={
       morning:'',
       afternoon:''
     }
  }
  render(){
    return(
      
      <View style ={styles.container}>
      <TouchableOpacity>

        <Text style={styles.text}>Half Day</Text>
     
      </TouchableOpacity>
      <View style={styles.textview}>
        <Text style={styles.textday}>Morning</Text>
        <Text style={styles.textday}>Afternoon</Text>
      </View>
      </View>

    )
  }
}

const styles= StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'pink'
  },
  text:{
    fontSize:20,
    fontWeight:'bold',
    marginTop:150,
    justifyContent:'center',
    alignItems:'center',
    marginLeft:60
    
  },
  textview:{
    
    // alignItems:'center',
    // justifyContent:'center'
    marginTop:50

  },
  textday:{
    fontSize:20,
    marginLeft:80,
    marginTop:10
  }
})

