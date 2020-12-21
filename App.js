import React, { Component } from 'react';
import { StyleSheet , Text, View, Button } from 'react-native';

export default class App extends Component {

  constructor(){
    super();
    this.state = {text:''};
  }
  render () {
    return (
      <View style = {styles.container}>
      <Button onPress={this.postData} title='post data' />
        <Text style ={styles.text}>{this.state.text}</Text>
      </View>
    );
  }

  postData = async () => {
    let formData = new FormData();
    // formData.append('username','admin');
    // formData.append('password','admin');


    this.setState({ text:'click'})
    fetch('https://reactnative.dev/movies.json',{
      method:'POST',
      body: formData
    }).then((response) => response.JSON())
    this.setState({text: JSON.stringify(responseJSON)})
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor: 'pink'
    
  },
  text:{
    fontSize:25,
    margin: 10
  }
});