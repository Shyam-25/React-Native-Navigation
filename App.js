import React, { Component } from "react";
import {View, Text, Animated, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import Icon  from 'react-native-vector-icons/MaterialIcons';

 export default class App extends Component {

     constructor(props){
        super(props);
          this.state={
         datas:[
            {
                id: '1',
                name: 'Non-Veg Briyani',
                description:'Biryani is a mixed rice dish with its origins among the Muslims of the Indian subcontinent. It is made with Indian spices, rice, and meat, or vegetables'
            },
            {
                id:'2',
                name:'Pizza',
                description:'Pizza is a savory dish of Italian origin consisting of a usually round, flattened base of leavened wheat-based dough topped with tomatoes, cheese'
            },
            {
                id:'3',
                name:'Ice Cream',
                description:'Ice cream is a sweetened frozen food typically eaten as a snack or dessert. It may be made from dairy milk or cream and is flavoured with a sweetener'
            },
            {
                id:'4',
                name:'Desert',
                description:'Desert is something sweet that is eaten after the main part of a meal'
            }
      

         ],
      expand:false,
   }
  };
  isEnabled=()=>{
    this.setState({expand:! this.state.expand});
    console.log(this.state.expand)
  }
  renderItems=({item})=>{
    const expands= this.state.expand;
    console.log(expands)
    return(
    <View style={styles.container}>

      <View style={styles.itemContainer}>
        <TouchableOpacity onPress={()=>this.isEnabled} style={styles.row}>
         <Text style={styles.itemText}>{item.name}</Text>
          <Icon name={this.state.expand ? 'keyboard-arrow-up' : 'keyboard-arrow-down'} size={10} color='grey' />
        </TouchableOpacity>
      </View>
      <View style={styles.parentHr}/>
            {this.state.expand && (
              <View style={styles.child}>
                <Text>{item.description}</Text>    
              </View>)
            }
    </View>
    )
  };
  render(){
    return(
        <View style={styles.container}>
            <FlatList 
            data={this.state.datas}
            renderItem={this.renderItems}
            extradata={this.state}
            />
        </View>
      );
    }
}
const styles=StyleSheet.create({
  container:{
   backgroundColor:'green',
    justifyContent: 'center',
   flex:1,
   marginTop:30
  },
  itemContainer:{
    flexDirection:'row',
    padding:10,
    //elevation:5,
    backgroundColor:'white',
    borderRadius:10,
    borderColor:'blue',
    marginBottom:5,
    height:56,
    paddingLeft:25,
    paddingRight:18,
    alignItems:'center',
  },
  row:{
    flexDirection:'row',
    
  },
  itemText:{
    width:310,
    fontSize:14,
    fontWeight:'bold',
    color:'black',
  },
  parentHr:{
    height:1,
    color: 'black',
    width:'100%'
  },
  child:{
  backgroundColor: 'black',
  padding:16,
  },
});

