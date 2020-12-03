import React from 'react';
import { View, Text, FlatList } from 'react-native';

export default class App extends React.Component {
  state = {
    items: [],
    isLoading: false
  }

  renderRow = ({ item }) => {
    return (
      <View style={{ padding: 10, borderBottomWidth: 1, borderBottomColor: '#000' }}>
        <Text>{item.id}.{item.title}</Text>
      </View>
    )
  }

  componentDidMount(){
    this.getData()
  }

  getData = () => {
    this.setState({isLoading:true})
    fetch('https://reactnative.dev/movies.json')
    .then((response) => response.json())
    .then((json) => {
      this.setState({ items: json.movies });
    })
    .finally(()=> this.setState({isLoading:false}))
  }
  render() {
    return (
      <View style={{ flex: 1, marginTop: 50 ,backgroundColor:'pink'}}>
        <FlatList
          data={this.state.items}
          renderItem={this.renderRow}
          refreshing={this.state.isLoading}
          onRefresh={this.getData}
          keyExtractor={(i, k) => k.toString()}
        />
      </View>
    )
  }
}