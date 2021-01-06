import {View, Text, TouchableOpacity, FlatList, StyleSheet,LayoutAnimation, Platform, UIManager} from 'react-native';
import React, { Component } from "react";
import Icon  from 'react-native-vector-icons/MaterialIcons';

 class App extends Component {
  constructor(props) {
    super(props);
    this.state={
     item:[
      {
        id:'1',
        title:'Non-Veg Briyani',
        des:'Biryani is a mixed rice dish with its origins among the Muslims of the Indian subcontinent. It is made with Indian spices, rice, and meat, or vegetables',
        isEnable:false},
      {
        id:'2',
        title:'Pizzas',
        des:'Pizza is a savory dish of Italian origin consisting of a usually round, flattened base of leavened wheat-based dough topped with tomatoes, cheese',
        isEnable:false,
        pizaItems:[
          {key:"Chicken Dominator", value:false},
          {key:'Peri Peri Chicken', value:false}
        ]},

      {
        id:'3',
        title:'Ice-Cream',
        des:'Ice cream is a sweetened frozen food typically eaten as a snack or dessert. It may be made from dairy milk or cream and is flavoured with a sweetener',
        isEnable:false
      },
      {
        id:'4',
        title:'Desert',
        des:'Desert is something sweet that is eaten after the main part of a meal',
        isEnable:false
      },

    ],  
  };
  if (Platform.OS === 'android') {
    UIManager.setLayoutAnimationEnabledExperimental(true);
}
}
  isEnabled=({item,index})=>{
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    const data=this.state.item;
    const target=data[index]; 
    target.isEnable=!target.isEnable;
    data[index]=target;
    this.setState({datas:data})
   // console.log(this.state.datas[index])    
  }
  onClick=(index)=>{
    const temp = this.state.item;
    var mainIndex=0;
    for(var i=0;i<4;i++)
    {
      if(temp[i].isEnable){
         mainIndex=i;
      }
    }
    console.log(mainIndex)
    console.log(temp[mainIndex].pizaItems[index].value)
    temp[mainIndex].pizaItems[index].value=!temp[mainIndex].pizaItems[index].value
    this.setState({data: temp})
  }
  renderItems=({item,index})=>{
      return(
    <View style={styles.containers}>

      <View style={styles.inputContainer}>
        <TouchableOpacity onPress={()=>this.isEnabled({item,index})} style={styles.row}>
          <Text style={styles.Text}>{item.title}</Text>
          <Icon name={item.isEnable? 'keyboard-arrow-up' : 'keyboard-arrow-down'} size={30} color='grey' />
        </TouchableOpacity>
      </View>
            <View style={styles.desView}/>
             {item.isEnable && (
             <View style={styles.desText}>
               <FlatList
               data={item.pizaItems}
               renderItem={({item, index}) => 
               <View>
                   <TouchableOpacity style={[styles.childRow, styles.button, item.value ? styles.btnActive : styles.btnInActive]} onPress={()=>this.onClick(index)}>
                       <Text style={styles.desText} >{item.key}</Text>
                       <Icon name={'check-circle'} size={24} color={ item.value ? 'green' :  'white'} style={styles.icons} />
                   </TouchableOpacity>
                   {/* <View style={styles.des}/> */}
               </View>}
               />
          
                 <Text>{item.des}</Text>   
              </View>)
            }
    </View>
    )
  };
  render(){
    return(
        <View style={styles.container}>
          <FlatList 
            data={this.state.item}
            renderItem={this.renderItems}
            extraData={this.state}
          />
        </View>
      );
    }
}
const styles=StyleSheet.create({
  container:{
    backgroundColor:'#9FA8DA',
    justifyContent:'center',
    paddingTop:100,
    flex:1,
    marginTop:10
  },
  inputContainer:{
    flexDirection:'row',
    padding:10,
    backgroundColor:'white',
    borderColor:'black',
    marginBottom:5,
    height:56,
    // paddingLeft:25,
    // paddingRight:30,
    alignItems:'center',
  },
  row:{
    flexDirection:'row',
  },
  Text:{
    width:250,
    fontSize:18,
    fontWeight:'bold',
    color:'red',
  },
  childRow:{
    flexDirection: 'row',
    justifyContent:'space-between',
    backgroundColor: 'red',
},
  icons:{
    paddingTop:15,
  },
  btnActive:{
    borderColor: 'black',
  },
  btnInActive:{
    borderColor: 'white',
  },
  desView:{
    height:1,
    color: 'white',
    width:'100%',
    fontSize:20
  },
  desText:{
  backgroundColor: 'red',
  padding:16,
  fontSize:20,
  color:'white'
  },
});

export default App;

