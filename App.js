i
import React from 'react';
import { StyleSheet , Text, View, TouchableOpacity } from 'react-native';
import axios from 'axios';
import { ScrollView } from 'react-native-gesture-handler'

export default class App extends Comment {

  state={
    data:'',
    post:'',
    isLoading: true,
  }

  getData = () => {
    axios
    .get('https://reactnative.dev/movies.json')
    .then(function(response){
      alert(JSON.stringify(response.data));
    })
    .catch(function (error){
      alert(error.message);
    })
    .finally(function(){
      alert('finally called')
    });
  }
  render(){
    return(
      <ScrollView>
      <View style={styles.container}>
        <Text style= {{ fontSize: 25, textAlign:'center'}}> Axios</Text>
      </View>

      <TouchableOpacity 
       onPress={this.getData}
       >
       
        <Text>Get</Text>
       
      </TouchableOpacity>
      </ScrollView>

    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'pink'
  }
})