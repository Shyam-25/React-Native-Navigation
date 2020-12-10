import React, { Component } from "react";
import {View , Alert} from "react-native";
import { CustomPicker } from 'react-native-custom-picker'

class Picker extends Component{
render (){
  const options = ['C', 'C++', 'Java', 'React-native', 'Javascript'] 
  return(

      <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center' }}>
        <CustomPicker
        options={options}
        onValueChange={value => {
          Alert.alert('Selected course', value || 'No course are selected!')
        }}/>
    </View>
    
  )
}
}


export default Picker;