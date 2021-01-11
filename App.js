import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput
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
         <View style={styles.inputcontainer}>
         <Text style={styles.tete}>HI</Text>
         <TextInput style={styles.inputs}
              placeholder="Email"
              keyboardType="default" >
                hi
              </TextInput>
      </View>
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
    backgroundColor:'pink'
  },
  title: {
    // textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    padding: 10,
    marginRight:250,
    paddingTop:50,
    paddingBottom:10
  },
  datePickerStyle: {
    width: 200,
    marginRight:150,
    paddingBottom:10
    // paddingTop:10
    // marginTop: 20,
  },
  inputcontainer:{
    flex:1,
    paddingBottom:20,
    marginBottom:20,
    width:250,
    height:55,
  },
  textdes:{
    fontSize:20,
    marginBottom:20,
    marginRight:200,
    paddingBottom:30,
    fontWeight:'bold'
  },
  inputs:{
    height:45,
    marginLeft:46,
    borderBottomColor: '#FFFFFF',
    fontSize:20,
    marginRight:150
},
tete:{
  fontSize:20,
  marginRight:150,
  fontWeight:'bold'
  
}
});