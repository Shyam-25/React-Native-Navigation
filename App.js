import React, { Component } from 'react';
import {
  StyleSheet,Text,View,TouchableOpacity,FlatList,Modal, ScrollView } from 'react-native';


export default class Users extends Component {

  constructor(props) {
    super(props);
    this.state = {
      modalVisible:false,
      userSelected:[],
      data: [
        {id:1,  name: "INDIA", content:"India has a fast-growing, diverse economy with a large, skilled workforce"},
        {id:2,  name: "AMERICA", content:"The United States of America is a North American nation that is the world’s most dominant economic and military power"},
        {id:3,  name: "SWITZERLAND", conten:"Switzerland, officially called the Swiss Confederation, is a small country in Central Europe made up of 16,000 square miles"} ,
        {id:4,  name: "CANADA",       content:"Canada takes up about two-fifths of the North American continent, making it the second-largest country in the world after Russia"} ,
        {id:5,  name: "GERMANY",    content:"Germany, the most populous nation in the European Union, possesses one of the largest economies in the world"} ,
        {id:6,  name: "CHINA",     content:"The country is the world’s most populous and is considered the second-largest by land mass.China has been ruled by the Communist Party"} ,
        {id:7,  name: "JAPAN", content:"The country can trace its political unification to the late fourth and early fifth centuries B.C.Japan had grand territorial ambitions in the 1900s, invading several countries, only to be defeated in World War II."} ,
        {id:8,  name: "UNITED KINGDOM" , content:"The country’s role on the global stage faces new questions as the government is planning to approve this year its withdrawal from the European Union"} ,
        {id:9,  name: "SWEDEN",    content:"Sweden operates under a model similar to those of other Nordic nations: heavily capitalistic with a large percent of spending going toward public service."} ,
        {id:10, name: "NETHERLAND", content:"Situated along the fringes of Western Europe, the Netherlands is a coastal lowland freckled with windmills characteristic of its development around the water."} ,
        {id:11, name:"NORWAY", content:"The Norwegians developed a maritime culture, and were active throughout the Viking era" },
        {id:12, name:"NEW ZEALAND", content:"British and Polynesian influences course through picturesque New Zealand, an island nation in the Pacific Ocean southeast of Australia" },
        {id:13, name:"FRANCE", content:"The influence France has on the world, both in the past and today, is difficult to overstate. Located in Western Europe" },
        {id:14, name:"DENMARK", content:"The Kingdom of Denmark emerged in the 10th century and includes two North Atlantic island nations, the Faroe Islands and Greenland" },
        {id:15, name:"FINLAND", content:"Geography defines the history and culture of Nordic Finland, one of the most northern-reaching countries in the world" },
        {id:16, name:"ITALY", content:"Italy is a south-central European country, whose boot-shaped borders extend into the Mediterranean Sea"},
        {id:17, name:"AUSTRIA", content:"Austria is a culturally rich, high-income parliamentary democracy that hosts several key international organizations"},
        {id:18, name:"SPAIN", content:"A number of independent kingdoms united in 1492 to form the Kingdom of Spain, a cultural patchwork that continues to shape the modern nation’s dynamic identity" },
        {id:19, name:"SOUTH KOREA", content:"South Korea, officially the Republic of Korea, is a nation in eastern Asia with a long history of conflict that occupies the southern portion of the Korean Peninsula" },
        {id:20, name:"NORTH KOREA", content:"North Korea The nation has seen steady growth and poverty reduction since the 1960s and is now the world’s seventh-largest exporter and 11th-largest economy overall" },
        {id:21, name:"RUSSIA", content:"The scale of Russia is difficult to imagine. It is the world’s largest country by land mass – nearly twice as big as Canada " },
        {id:22, name:"SRI LANKA", content:"Srilanka includes Top industries like oil and natural gas production, with agriculture, forestry, fishing and manufacturing serving as other economic drivers" },
        {id:23, name:"UAE", content:"The emirates that currently comprise the UAE were known as the Trucial States in the 19th century as a result of a series of agreements with Great Britain" },
        {id:24, name:"PORTUGAL", content:" The country is made up of a federation of monarchies, where the legal system is a mix of civil and Islamic law" },
        {id:25, name: "BRAZIL", content:"Brazil, officially the Federative Republic of Brazil, is the largest country in both South America and Latin America" }
        
      ]
    };
  }

  clickEventListener = (item) => {
    this.setState({userSelected: item}, () =>{
      this.setModalVisible(true);
    });
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  render() {
    return (
      <View style={styles.container}>

   
          
        <FlatList 
          style={styles.inputcontainer}
          data={this.state.data}
          keyExtractor= {(item) => {
            return item.id;
          }}
          renderItem={({item}) => {
          return (
            <TouchableOpacity style={styles.card} onPress={() => {this.clickEventListener(item)}}>
              <View style={styles.cardContent}>
                <Text style={styles.name}>{item.name}</Text>
                <TouchableOpacity style={styles.flatButton} onPress={()=> this.clickEventListener(item)}>
                  <Text style={styles.ButtonText}>OPEN</Text>  
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          )}}/>

     <Modal
          animationType={'slide'}
          transparent={true}
          onRequestClose={() => this.setModalVisible(false)}
          visible={this.state.modalVisible}>

          <View style={styles.modalcontainer}>
            <View style={styles.modalinputcontainer}>
              <View style={styles.modalContent}>
                <ScrollView contentContainerStyle={styles.modalInfo}>
                    <Text style={styles.name}>{this.state.userSelected.name}</Text>
                    <Text style={styles.text}>{this.state.userSelected.content}</Text>
                </ScrollView>
              </View>
              <View style={styles.modalButtons}>
                <TouchableOpacity onPress={() => {this.setModalVisible(false) }} style={styles.btnClose}>
                  <Text style={styles.Close}>CLOSE</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>

       
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    marginTop:20,
    backgroundColor:"pink"
  },
  headerContent:{
    padding:30,
    alignItems: 'center',
    flex:1,
  },
  inputcontainer:{
    flex:1,
  },
  cardContent: {
    marginLeft:20,
    marginTop:10
  },
  card:{
    marginVertical: 10,
    marginHorizontal:20,
    backgroundColor:"white",
    padding: 1,
    flexDirection:'row'
  },

  name:{
    fontSize:20,
    flex:1,
    alignSelf:'center',
    color:"#00F",
    fontWeight:'bold'
  },
  text:{
    marginHorizontal:50,
    fontSize: 20
  },

  flatButton: {
    marginTop:10,
    height:30,
    width:80,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:30,
    backgroundColor: "#00BFFF",
  },
  ButtonText:{
    color: "#FFF",
    fontSize:20,
  },

  modalinputcontainer: {
    backgroundColor: 'pink',
    marginTop: 80,
    marginHorizontal: 20,
    borderRadius: 7,
    flex:.5
  },
  modalcontainer: {
    backgroundColor: "#00F",
    flex: 1,
    marginTop: 10
  },
  modalContent: {
    margin: 5,
    height:180
  },
  Close: {
      fontSize:20,
      fontWeight:"bold",
      color:"#fff"
  },

  modalButtons: {
    marginTop: 100,
    flexDirection: 'row',
    justifyContent:'center',
    height:100
  },

  btnClose:{
    height:20,
    // backgroundColor:'#fff',
    padding:20
  },
  modalInfo:{
    alignItems:'center',
    justifyContent:'center',
  }
});