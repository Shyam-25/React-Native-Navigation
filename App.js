import React from 'react';
import {Text,FlatList,View, StyleSheet } from 'react-native';

import axios from 'axios';

class App extends React.Component {
    constructor()
    {
      super ()
      this.state = {
        nameList:[],
        isLoading:true,     
       }
    }

    async componentDidMount(){
        const  response = await axios.get('https://reactnative.dev/movies.json');
        const item = await response.data.movies;
        this.setState({nameList:item})
        console.log(this.state.nameList)
        console.log(this.state.isLoading)
        console.log(this.state.nameList.length)
        
    }

    render() {
        const { nameList, isLoading } = this.state;
        return (
           
            <View styles={styles.container}>
            {isLoading?(
                <FlatList
                data={nameList}
                keyExtractor={({ id }) => id}
                renderItem={({ item }) => (
                    
                   
                    <Text style= {styles.text}> Name :  {item.title},    ReleaseYear:  {item.releaseYear}</Text>
                )}
                />
                ) :<Text>DATA is Loading</Text>
            }
            </View>
          
     
        );
    }
}

export default App;
const styles=StyleSheet.create({
    container:{
        padding:20,
        flex: 1,
        
    },
    text:{
      fontSize:20,
      margin:20,
      backgroundColor:'#000',
      color:'#ff0',
      fontWeight:'bold'
    }
    
});