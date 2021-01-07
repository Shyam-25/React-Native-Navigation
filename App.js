import React, { Component } from 'react';
import { StyleSheet,Text, TextInput, View, Button, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons';

export default class App extends Component{
  constructor(props){
    super(props);
    this.state={
      expanded:false
      
    }
  }
  isEnabled=()=>{
    <View style={styles.textview}>
    <Text style={styles.textday}>Morning</Text>
    <Text style={styles.textday}>Afternoon</Text>
  </View>

  }
  render(){
    return(
      
      <View style ={styles.container}>
      <TouchableOpacity

      onPress={()=>this.setState({expanded:true})} style={styles.row}>
        
        {/* <Button
        title='half day'
        backgroundColor='#fff'
        onPress={()=> alert('leave')}>
        hald

        </Button> */}
        <Text style={styles.text}>Half Day</Text>
        {/* <Icon name={this.isEnable? 'keyboard-arrow-up' : 'keyboard-arrow-down'} size={30} color='grey' /> */}
        {/* <Icon name={  'keyboard-arrow-down'} size={30} color='grey' /> */}
     
      </TouchableOpacity>
      {
        this.state.expanded &&

 
         <View style={styles.child}>

 
            <Text>Hi</Text>

 
          </View>

 
}
     
      </View>

    )
  }
}

const styles= StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'pink',
    
  },
  text:{
    fontSize:20,
    fontWeight:'bold',
    marginTop:150,
    justifyContent:'center',
    alignItems:'center',
    marginLeft:60,
    shadowColor: '#fff',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 100,
    shadowRadius: 2,
    elevation: 3,
    
  },
  textview:{
    
    // alignItems:'center',
    // justifyContent:'center'
    marginTop:50,
    

  },
  textday:{
    fontSize:20,
    marginLeft:80,
    marginTop:10
  }
})

