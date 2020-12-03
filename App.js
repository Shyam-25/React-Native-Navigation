import React from 'react';
import { View, Text, FlatList, StyleSheet,Image , RefreshControl } from 'react-native';

export default class App extends React.Component {
    state = {
        firstdata:[
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
        },
    ],
        Seconddata: [
      {
          id:'7',
          name:'Sam curran',
          content:' Samuel Matthew Curran is an English cricketer, who plays for Surrey, and England.',
          Uri:'https://reactnative.dev/img/tiny_logo.png',
          hours:'5.30 PM',

         },
         {
          id:'8',
          name:'Shyam',
          content:' Shyam is Good boy and he works well, he plays cricket',
          Uri:'https://reactnative.dev/img/tiny_logo.png',
          hours:'6.30 PM',
         },
         {
          id:'9',
          name:'Arun',
          content:' Arun is Good boy and he works well,He play kabadi',
          Uri:'https://reactnative.dev/img/tiny_logo.png',
          hours:'7.30 PM',

         },
         {
          id:'10',
          name:'Bala',
          content:'Bala shares his birthday with the legend Wasim Akram, but he has also shown the same qualities with the ball at a very young age',
          Uri:'https://reactnative.dev/img/tiny_logo.png',
          hours:'8.30 PM',
         },
         {
          id:'11',
          name:'Ramesh',
          content:'Indian film actor and producer who works in Tamil and Telugu cinema',
          Uri:'https://reactnative.dev/img/tiny_logo.png',
          hours:'9.30 PM',
         },
         {
          id:'12',
          name:'Jeeva',
          content:'best known by his stage name Jithan Ramesh, is an Indian actor',
          Uri:'https://reactnative.dev/img/tiny_logo.png',
          hours:'10.30 PM',
         },
         {
          id:'13',
          name:'Rio',
          content:'hsybxy osouie udtcsu dsudhcodi sudhbcolsc slublsuhoguoidh yesvfd dsludeu lbsldhfsdkn',
          Uri:'https://reactnative.dev/img/tiny_logo.png',
          hours:'11.30 PM',
         },
         {
          id:'14',
          name:'kumar',
          content:'wrwsvsh egdsksgerty gdsklpwbh kdgeytrkb hdblkdhbc iduhcdjcn hudsiblncl oidccnd akjdbkn',
          Uri:'https://reactnative.dev/img/tiny_logo.png',
          hours:'12.30 AM',
         },
    ],
    isRefreshing:false,
    arr:[]
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
            
        </View>
      </View>
    )
  }
  onendReached=()=>{         
    console.log(this.state.firstdata.length)
    if(this.state.firstdata.length<this.state.Seconddata.length+5){
      this.setState({
          firstdata:this.state.firstdata.concat(this.state.Seconddata.slice(this.state.firstdata.length-6,this.state.firstdata.length-1))
        })
      } 
  }
  
  refresh=()=>{
    this.setState({isRefreshing:true})
  }

  render() {
    return (
      <View >
        <FlatList
          data={this.state.firstdata}
          renderItem={this.renderRow}
          keyExtractor={item=>item.id}
          extraData={this.state.Seconddata}
          onEndReached={this.onendReached}
          onEndReachedThreshold={0}
          refreshControl={
            <RefreshControl refreshing={this.state.isRefreshing} onRefresh={this.refresh}/>
          }
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