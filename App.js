import React from 'react';
import { View, Text, FlatList, StyleSheet,Image } from 'react-native';

export default class App extends React.Component {
    state = {
        data:[
      {
          id:'1',
          name:'Virat kohli',
          content:'Virat Kohli is an Indian cricketer and the current captain of the India national team',
          Uri:'https://reactnative.dev/img/tiny_logo.png',
          time:'11.30 AM',
         },
      {
          id:'2',
          name:'Vijay',
          content:'Vijay is an Indian actor, dancer, playback singer and philanthropist who works in Tamil cinema',
          Uri:'https://reactnative.dev/img/tiny_logo.png',
          time:'12.30 PM',
        },
      {
          id:'3',
          name:'Sunil Chhetri',
          content:'Sunil Chhetri is an Indian professional footballer who plays as a striker and captains both the ISL and the Indian team.',
          Uri:'https://reactnative.dev/img/tiny_logo.png',
          time:'1.30 PM',
        },
      {
          id:'4',
          name:'Anirudh',
          content:'Anirudh is an Indian film composer and singer who primarily works in Tamil cinema',
          Uri:'https://reactnative.dev/img/tiny_logo.png',
          time:'2.30 PM',
        },
      {
          id:'5',
          name:'MS Dhoni',
          content: 'Dhoni is a former Indian international cricketer who captained the Indian national team in limited-overs formats',
          Uri:'https://reactnative.dev/img/tiny_logo.png',
          time:'3.30 PM',
        },
      {
          id:'6',
          name:'Ravi Ashwin',
          content:' Ashwin is an Indian international cricketer. An all-rounder who bats right-handed and bowls right-arm off break',
          Uri:'https://reactnative.dev/img/tiny_logo.png',
          hours:'4.30 PM',
        }
    ]
 }
 renderRow = ({ item }) => {
    return (
      <View style={styles.container}>
        <View style={styles.imageHolder}>
            <Image source={{uri:item.Uri}} style={styles.imageContainer}/>   
        </View>
        <View style={styles.textContainer}>
            <Text style={styles.title}>{item.name}</Text>
            <Text style={styles.content}>{item.content}</Text>
            <Text style={styles.time}>{item.time}</Text>
            <Image source={{uri:item.Uri}} style={styles.imageInputContainer}/>  
        </View>
      </View>
    )
  }

  render() {
    return (
      <View >
        <FlatList
          data={this.state.items}
          renderItem={this.renderRow}
        />
      </View>
    )
  }
}

const styles=StyleSheet.create({
  container:{
    flexDirection:'row',
  },
  imageHolder:{
    padding:10,
    alignItems:'center',
   backgroundColor:'pink',
    borderBottomWidth:5,
    borderBottomColor:'grey',
   
  },
  imageContainer:{
    width:50, 
    height:50,
    padding:10,
    borderRadius:50,
    marginTop:10,
  },
  imageInputContainer:{
    width:50, 
    height:50,
    padding:10,
    borderRadius:50,
    marginTop:10,
    alignSelf: 'flex-end',
    justifyContent: 'flex-end'
  },
  textContainer:{
    paddingLeft:10,
    paddingRight:100,
    borderBottomColor:'white',
    borderBottomWidth:5,
    backgroundColor:'white',
    flexDirection:'column',
    fontStyle: 'italic',
    backgroundColor:'grey'
    
 },
  title:{ 
    paddingTop:.5,
    color:'#00b0ff',
    fontSize:30,
    fontWeight: "bold",
    justifyContent:'flex-start'
    
  },
  content:{
    paddingBottom:10,
    justifyContent:'space-evenly',
    fontSize:15 ,
    backgroundColor:'white',
    fontStyle: 'italic',
    
  },
  time:{
    paddingBottom:15,
    color:'white',
  },
})
