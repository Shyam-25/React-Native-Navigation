import React, { Component } from 'react';
import { StyleSheet,Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class App extends Component{
  constructor(props){
    super(props);
    this.state={
      expanded:false,
      ismorning:false,
      isafternoon:false
      
    }
  }
 
  render(){
    return(
      
      <View style ={styles.container}>
      <TouchableOpacity

      onPress={()=>this.setState({expanded:!this.state.expanded})} style={styles.row}>
   
       
        <Text style={styles.text}>Half Day</Text>
        <Icon name={this.state.expanded? 'keyboard-arrow-up' : 'keyboard-arrow-down'} style={styles.iconmain}  />
        {/* <Icon name={  'keyboard-arrow-down'} size={30} color='grey' /> */}
     
      </TouchableOpacity>
      {
        this.state.expanded &&

 
         <View style={styles.child}>

         <TouchableOpacity>

         
            <Text style={styles.textstyle}>Morning</Text>
            <Icon name={this.state.ismorning? 'check-circle' :  'circle'} style={styles.iconstyle} />   
         </TouchableOpacity>

       <TouchableOpacity>
            <Text style={styles.textstyle}>Afternoon</Text>
            <Icon name={this.state.isafternoon? 'check-circle' :  'circle'} style={styles.aicon} />

        </TouchableOpacity>
       
 
          </View>

 
}
     
      </View>

    )
  }
}

const styles= StyleSheet.create({
  container:{
    // flex:1,
    backgroundColor:'pink',
    flex:1
    
  },
  text:{
    fontSize:20,
    fontWeight:'bold',
    marginTop:150,
    justifyContent:'center',
    alignItems:'center',
    marginLeft:20,
    shadowColor: '#fff',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 100,
    shadowRadius: 2,
    elevation: 3,
    
  },
 
  child:{
    
    marginLeft:20,
    marginTop:30,
    flexDirection:'row',
    justifyContent:'space-between',
    // backgroundColor:'#fff'
    
  },
  textstyle:{
    fontSize:20,
    marginTop:1,
    fontWeight:'bold',
    marginLeft:50
  },
  iconstyle:{
    marginLeft:30,
    paddingLeft:130,
    marginBottom:40,
    fontSize:20,
    marginTop:10
    // paddingTop:20
  },
  row:{
    flexDirection:'row',
    marginLeft:40,
    marginBottom:20,
    justifyContent:'space-between',
    marginBottom:50
  },
  aicon:{
    paddingLeft:130,
    fontSize:20,
    marginLeft:30
  },
  iconmain:{
    marginLeft:30,
    paddingLeft:120,
    marginBottom:50
  }
})

