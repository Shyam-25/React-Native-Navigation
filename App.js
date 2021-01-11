import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity
} from 'react-native';

import DatePicker from 'react-native-datepicker';

const App = () => {
  const [date, setDate] = useState('');

  return (
    // <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.title}>
          Date
        </Text>
        <DatePicker
          style={styles.datePickerStyle}
          date={date} 
          mode="date" 
          placeholder="select date"
          format="DD-MM-YYYY"
          minDate="01-01-2016"
          maxDate="01-01-2049"
          backgroundColor='black'
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={{
            // dateIcon: {
            //   //display: 'none',
            //   position: 'absolute',
            //   left: 0,
            //   top: 4,
            //   marginLeft: 0,
            // },
            dateInput: {
              marginLeft: 36,
            },
          }}
          onDateChange={(date) => {
            setDate(date);
          }}
        />
       

      <View style={styles.time}>
        <Text style={styles.tetime}>Time From</Text>
        <TextInput style={styles.inputs}
              placeholder="Time "
              keyboardType="default"
              borderBottomColor='red'
              borderColor='red' >
               
              </TextInput>
      </View>
      <View style={styles.timeit}>
        <Text style={styles.teto}>TotalHours</Text>
        <TextInput style={styles.inputs}
              placeholder="Total Hours"
              keyboardType="default"
              borderBottomColor='red'
              borderColor='red' >
               
              </TextInput>
      </View>

      <View style={styles.inputcontainer}>
         <Text style={styles.tete}>DESCRIPTION</Text>
         <TextInput style={styles.inputs}
              placeholder="description"
              keyboardType="default"
              borderBottomColor='red'
              borderColor='red' >
               
              </TextInput>
      </View>
       

       <TouchableOpacity >
         <Text style={styles.submit}>
           Submit
         </Text>
       </TouchableOpacity>

      </View>

     
    // </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#9AC4F8'
  },
  title: {
    // textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    padding: 10,
    marginRight:250,
    paddingTop:50,
    paddingBottom:10,
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 2
    },
  },
  datePickerStyle: {
    width: 290,
    marginRight:10,
    paddingBottom:10,
    marginRight:80,
    borderBottomColor:'grey'
    // height:30
    // paddingTop:10
    // marginTop: 20,
  },
  inputcontainer:{
    // flex:.1,
    paddingBottom:20,
    marginBottom:20,
    marginLeft:40,
    marginRight:5,
    paddingBottom:30,
  },
  textdes:{
    fontSize:20,
    marginBottom:20,
    marginRight:200,
    paddingBottom:10,
    fontWeight:'bold',
    // paddingTop:10
   
  },
  inputs:{
    height:40,
    width:290,
    marginLeft:5,
    borderBottomColor: '#ff0000',
    fontSize:20,
    marginRight:50,
    backgroundColor:'white'
},
tete:{
  fontSize:20,
  // marginRight:100,
  fontWeight:'bold',
  width:200,
  height:55,
  // paddingRight:50
},
time:{
  marginRight:.5,
  paddingBottom:30,
  paddingBottom:20,
  marginBottom:20,
  marginLeft:40
},
timeit:{
  marginRight:5,
  paddingBottom:30,
  paddingBottom:20,
  marginBottom:20,
  marginLeft:40
},
teto:{
  fontSize:20,
  fontWeight:'bold'
},
tetime:{
  fontSize:20,
  fontWeight:'bold'
},
submit:{
  fontSize:20,
  backgroundColor:'#fff',
  fontWeight:'bold',
  marginRight:220,
  // marginLeft:20
}
});