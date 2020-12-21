import React from 'react';
import { StyleSheet , Text, View } from 'react-redux';

export class App extends React.Component {
  async componentDidMount() {

    try {
      await fetch('https://reactnative.dev/movies.json', {
        method:'post',
        mode: 'no-cors';
        headers: {
          'Accept': 'application/json',
          'Content-Type':'application/json'
        },
        body: JSON.stringify({
          username: 'shyam',
        })
      });

    } catch(e) {
      console.log(e);


    }

  }

  render() {
    return (
     <View> <Text>Hello</Text> </View>
    );
  }
}