import React from 'react';
import { Text, View, SectionList, Stylesheet } from 'react-native';

const year2019=[
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
    <Text style={{fontSize:40,color:'grey', paddingTop:10,fontWeight:'bold'}}>Test Milestones</Text>

    <View style={styles.inputcontainer}>
      <Text style={styles.text}>{items.value}</Text>
      <Text style={styles.days}>{items.days}</Text>
      <Text style={styles.month}>{items.month}</Text>
      <Text style={styles.content}>{items.content}</Text>

      
    </View>
  </View>
);

export default class App extends React.Component {
      
  render() {
    return (
      <View >
        <SectionList
          sections={DATA}
          renderItem={({item})=><SectionListItems items={item}/>}
          renderSectionHeader={({ section: { title } }) => (
            <Text style={styles.header}>{title}</Text>
          )}
         />
      </View>
    )
  }
}

const styles=Stylesheet.create({
  header:{
    paddingLeft:10,
    fontSize:14,
    paddingBottom:5,
    fontWeight:'bold',
  },
  container:{
    flexDirection:'row',
    backgroundColor:'#ffffff',
  },
  inputcontainer:{
    paddingTop:20,
    paddingBottom:20,
    paddingRight:20,
    paddingLeft:10,
    flexDirection:'row',
    backgroundColor:'#00F'
  },
  text:{
    fontsize:'20',
    fontWeight:'bold'

  },
  days:{
    fontsize:'10',

  },
  month:{
    fontsize:'10',
  },
  content:{
    fontsize:'10'
  },

})