import React from 'react';
import { SafeAreaView, Image,ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

const YourApp = () => {
  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView style={styles.scrollView}>
    <View
        style={{
         flex:4,
          padding: 10
        }}>
        <View style={styles.container} />
        <View style={{ backgroundColor: "pink",flex:4,height:1000, }} />
       <View style={styles.viewimage}><Image
        style={styles.tinyLogo}
        source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png',
        }}/></View>
        <Text style={styles.textarea}>EnterUser Name</Text>
        <TextInput style={styles.input}/>
      </View>
      </ScrollView>
      </SafeAreaView>
     
  );
}

const styles= StyleSheet.create({
tinyLogo:{
  width:60,
  height:60,
  alignItems:'center',
},
viewimage:{
  alignItems:'center',
},
container:{
backgroundColor:"red",
height:500,
borderColor:'blue',
borderWidth:4,
},
textarea:{
borderColor:"gray",
borderWidth:2,
margin:8,
},
input:{
  borderColor:'gey',
  borderWidth:3,
},
});

export default YourApp;