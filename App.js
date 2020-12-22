import React, { Component } from 'react';

import {StyleSheet, View, TouchableOpacity, Text} from 'react-native';

import axios from 'axios';
import { ScrollView } from 'react-native-gesture-handler';

class App extends Component {
    state={
        data:'',
        post:'',
        multi1:'',
        isloading:true,
    }
   

   multipleRequestsInSingleCall = () => {
       //const data='';
    axios
      .all([
        axios
          .get('https://jsonplaceholder.typicode.com/posts/1')
          .then(function (response) {
              //data=JSON.stringify(response.data);
            console.log('Post 1 : ' + JSON.stringify(response.data));
            
          }),
        axios
          .get('https://jsonplaceholder.typicode.com/posts/2')
          .then(function (response) {
            //alert('Post 2 : ' + JSON.stringify(response.data));
          }),
      ])
      .then(
        axios.spread(function (acct, perms) {
        alert('Both requests are now complete');
        }),
      );
    //  this.setState({multi1:data});
  };
render(){
  return (
  <ScrollView>
    <View style={styles.container}>
      <Text style={{fontSize: 30, textAlign: 'center'}}>
     Axio 
      </Text>
     
      

      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={this.multipleRequestsInSingleCall}>
        <Text style={{fontSize:25, fontWeight:'bold' }}>Multiple Concurrent Requests In Single Call</Text>
      </TouchableOpacity>

      <Text style={{textAlign: 'center', marginTop: 18}}>
            {this.state.data} 
      </Text>
      <Text style={{textAlign: 'center', marginTop: 18,margin:30,}}>
            {this.state.post} 
      </Text>
    </View>
    </ScrollView>
  );
}
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
    padding: 16,
  },
  buttonStyle: {
    alignItems: 'center',
    backgroundColor: '#00F',
    padding: 10,
    width: '100%',
    marginTop: 16,
  },
});

export default App;