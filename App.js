import React from 'react';
import { Text, View } from 'react-native';
import axios from 'axios';

class App extends React.Component {

  constructor()
  {
    super ()
    this.state = {
      data:[]
    }
  }

  componentDidMount()
  {
    this.getapiData()
  }
  async getapiData()
  {
    let resp=await axios.get('https://reactnative.dev/movies.json')

    console.warn(resp.data.movies)
    this.setState({data: resp.data.movies })
  }
  render() {
    return (
      <View style={ { flex:1, margin: 70 }} >
      {
        this.state.length>0?
        <View>
        {
              this.state.data.map((item)=>
              <Text style={{fontSize:40}}>{item.title},{item.releaseYear}</Text>)
        }
        </View> : <Text style={{fontSize:40}}> data is loading.. </Text>
        
                   
      }
        
      </View>
    )
  }
}

export default App;