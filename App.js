import React, { Component } from "react";
import {View,Text, StyleSheet,Button,Alert} from "react-native";
import DateTimePicker from '@react-native-community/datetimepicker';



class SimplePicker extends Component{

state={
  DATE:new Date(),
  touched:false
}
onHandeler=(date)=>{
 this.setState({DATE:date})
  console.log(this.state.DATE)
}
onPressed=()=>{
this.setState({touched:true})
}


render (){
  return(
    <View style={styles.container}>
    
      <Button title ='Date' onPress={this.onPressed}/> 
        {this.state.touched&&(<DateTimePicker
        mode='date'
        maximumDate={new Date(2025,4,20)}
        minimumDate={new Date(2019,1,12)}
        value={this.state.DATE}
        onChange={this.onHandeler}
        is24Hour={true}
        />)}
        
    </View>
    
  )
  
}
}

const styles= StyleSheet.create({
  container:{
padding:80,
  },
  pickerElement:{
    width:150,
    borderColor:'black',
    borderWidth:2,
    height:40,
  },

});
export default SimplePicker;
