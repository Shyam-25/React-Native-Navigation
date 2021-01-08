import React, { Component } from 'react';
import {  View, Text, StyleSheet, Picker } from 'react-native';
import {Calendar } from 'react-native-calendars';

export default class App extends Component
{
  constructor(){
    super();
    this.state={
      sickleave:12,
      causvalleave:10,
      leaveType:'Select Leave type'

    }
  }
  render(){
    return(
      <View style={styles.container }>
      
      <View style={styles.inputcontainer}>
        <Text style={styles.textview}>Sickleave:{this.state.sickleave}</Text>
        <Text style={styles.textview}>  Causalleave:{this.state.causvalleave}</Text>
      </View>
       
       <View style={styles.pickerstyle}>
         <Text style={styles.textpicker}>Leave Type</Text>
         <Picker style={styles.pickergg}
           selectedValue={this.state.leaveType}
           onValueChange={(itemValue,itemIndex) => {this.setState({itemValue}); console.log(this.state.leaveType)}}>
             <Picker.Item label='Select leave type' value='leave' />
             <Picker.Item label='Sick Leave' value='sick' />
             <Picker.Item label='casuval leave' value='casuval' />
           </Picker>
       </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'pink',
    justifyContent:'center',
    alignItems:'center',
    alignContent:'center'
  },
  inputcontainer:{
    padding:10,
    elevation:4,
    flexDirection:'row',
    justifyContent:'center',
  },
  textview:{
    fontSize:20,
    fontWeight:'bold',
    flexDirection:'row',
    
  },
  pickerstyle:{
    flexDirection:'row',
    elevation:4,
  },
  textpicker:{
    fontSize:20,
    marginRight:20
  },
  pickergg:{
    fontSize:20,
    height: 50, 
    width: 200,
    borderWidth:1,
    marginBottom:50
  
  }
})