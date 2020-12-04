import React from "react";
import { Text, View, SectionList, StyleSheet } from 'react-native';
import { Component } from 'react';

const year2019= [ 
  {
    id:'1',
    value:'An event with a single day',
    days:'0 days',
    month:'Nov 3,2019'
  },
  {
    id:'2',
    value:'An Ongoing Event',
    days:'10 days',
    month:'Jan 1,2019',
    content:'.Ongoing'
  }
];

const year2018=[
  {
    id:'1',
    value:'An event with a data range',
    days:'1yr,3mnth,27 days',
    month:'Jun 3,2016',
    content:'. Jun8, 2018'
  }
];

const year2016=[
  {
    id:'1',
    value:'An event with a data range',
    days:'3yr,5mnth,1day',
    month:'Jun 3,2016',
    content:'. Jun 8,2018'
  }
];

const DATA= [
  {
    title:'2019',
    data:year2019
  },
  {
    title:'2018',
    data:year2018
  },
  {
    title:'2016',
    data:year2016
  },
];

SectionListItems = ({ items }) =>(
  <View styles={styles.container}>
  {/* <View style={styles.imageHolder}>
  <Image source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}} style={styles.imageContainer}/>
     */}

    <View style={styles.inputcontainer}>
      <Text style={styles.text}>  {items.value}</Text>
      <Text style={styles.days}>   {items.days}</Text>
      <Text style={styles.month}>  {items.month} {items.content} </Text>  
     

      

      
    </View>
  </View>
);

export default class App extends React.Component {
      
  render() {
    return (
      <View >
      <Text style={{fontSize:40,color:'black', paddingTop:10,fontWeight:'bold'}}>  Test Milestones</Text>
      
        <SectionList
          sections={DATA}
          renderItem={({item})=><SectionListItems items={item}/>}
          renderSectionHeader={({ section: { title } }) => (
            <Text style={styles.header}>      {title}</Text>
          )}
         />
      </View>
    )
  }
}


const styles=StyleSheet.create({
  header:{
    
    fontSize:25,
    backgroundColor: 'grey',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth:15,
    borderBottomColor:'grey',
   
    // fontWeight:'bold',
  },
  container:{
    flexDirection:'row',
    backgroundColor:'red',
    borderBottomWidth:10
  },
  
  inputcontainer:{
    paddingLeft:10,
    paddingRight:40,
    borderBottomColor:'red',
    fontSize: 23,
    // borderBottomWidth:8,
    backgroundColor:'white',
    flexDirection:'column',
    fontStyle: 'italic',
   
  },
  text:{
    
    paddingBottom:10,
    justifyContent:'space-evenly',
    fontSize:25 ,
    backgroundColor:'white',
    fontWeight:'bold'

  },
  days:{
    fontSize:18,
    fontWeight:'bold'

  },
  month:{
    fontSize:18,
    // fontWeight:'bold',
   
  },
  content:{
    fontSize:15,
    alignContent:'center',
    textDecorationLine: "underline",
   
    paddingLeft:10,
    paddingRight:100,
    // backgroundColor:'grey'
   

  },

});
