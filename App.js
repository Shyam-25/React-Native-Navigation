import React from 'react'
import { Text, View } from 'react-native'
import axios from 'axios'

class App extends React.Component {

  componentWillUnmount()
  {
    axios.get('https://reactnative.dev/movies.json')
  .then(function (response) {
    console.warn(response.data.movies);
   })
  
  }

  render(){
    return(
      <View>
        <Text style={{ fontSize:25 }}>Axios Api handler</Text>
      </View>
    )
  }
}
export default App