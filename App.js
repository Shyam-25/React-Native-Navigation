import React, { Component } from "react";
import {View,Text,Image, StyleSheet,Button,Alert, TouchableOpacity} from "react-native";
import DateTimePicker from '@react-native-community/datetimepicker';
import ImagePicker from 'react-native-image-picker'

const options={
  title:'My Gallery',
  takePhotoButtonTitle:'Take photo with your camera',
  chooseFromLibraryButtonTitle:'choose photo from gallery',
}
export default class App extends Component {
  constructor(props){
    super(props);
    this.state={
      imageSource:null
    }
  }
  
    myfun=() => {
    
    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);
    
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        const source = { uri: response.uri };
        this.setState({
          imageSource: source,
        });
      }
    });
  }
  


  render () {
    return (
      <View styles={styles.container}>
        <Text style={styles.welcome}>Welcome to React native</Text>

        <Image source={this.state.imageSource}
        style={{width:100,height:300,margin:10}}></Image>


        <TouchableOpacity style={{backgroundColor:'green',margin:10,padding:10}}
        onPress={this.myfun}>
        
          <Text style={{color:'#fff'}}>Select Image</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
  
const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#fff'
  },
  welcome:{
    fontSize:20,
    textAlign:'center'
  }

}); 