import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Picker
} from 'react-native';

import DatePicker from 'react-native-datepicker';

const App = () => {
  const [date, setDate] = useState('');

  return (
    // <SafeAreaView style={styles.container}>
      <View style={styles.container}>
      <View style={styles.textcontainer}>
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
        <Picker style={styles.inputs}>
        <Picker.Item label='Select Time' value='default'/>
                        <Picker.Item label="00.00" value="00.00" />
                        <Picker.Item label="00.30" value="00.30"/>
                        <Picker.Item label="01.00" value="01.00" />
                        <Picker.Item label="01.30" value="01.30"/>
                        <Picker.Item label="02.00" value="02.00" />
                        <Picker.Item label="02.30" value="02.30"/>
                        <Picker.Item label="03.00" value="03.00" />
                        <Picker.Item label="03.30" value="03.30"/>
                        <Picker.Item label="04.00" value="04.00" />
                        <Picker.Item label="04.30" value="04.30"/>
                        <Picker.Item label="05.00" value="05.00" />
                        <Picker.Item label="05.30" value="05.30"/>
                        <Picker.Item label="06.00" value="06.00" />
                        <Picker.Item label="06.30" value="06.30"/>
                        <Picker.Item label="07.00" value="07.00" />
                        <Picker.Item label="07.30" value="07.30"/>
                        <Picker.Item label="08.00" value="08.00" />
                        <Picker.Item label="08.30" value="08.30"/>
                        <Picker.Item label="09.00" value="09.00" />
                        <Picker.Item label="09.30" value="09.30"/>
                        <Picker.Item label="10.00" value="10.00" />
                        <Picker.Item label="10.30" value="10.30"/>
                        <Picker.Item label="11.00" value="11.00" />
                        <Picker.Item label="11.30" value="11.30"/>
                        <Picker.Item label="12.00" value="12.00" />
                        <Picker.Item label="12.30" value="12.30"/>
                        <Picker.Item label="13.00" value="13.00" />
                        <Picker.Item label="13.30" value="13.30"/>
                        <Picker.Item label="14.00" value="14.00" />
                        <Picker.Item label="14.30" value="14.30"/>
                        <Picker.Item label="15.00" value="15.00" />
                        <Picker.Item label="15.30" value="15.30"/>
                        <Picker.Item label="16.00" value="16.00" />
                        <Picker.Item label="16.30" value="16.30"/>
                        <Picker.Item label="17.00" value="17.00" />
                        <Picker.Item label="17.30" value="17.30"/>
                        <Picker.Item label="18.00" value="18.00" />
                        <Picker.Item label="18.30" value="18.30"/>
                        <Picker.Item label="19.00" value="19.00" />
                        <Picker.Item label="19.30" value="19.30"/>
                        <Picker.Item label="20.00" value="20.00" />
                        <Picker.Item label="20.30" value="20.30"/>
                        <Picker.Item label="21.00" value="21.00" />
                        <Picker.Item label="21.30" value="21.30"/>
                        <Picker.Item label="22.00" value="22.00" />
                        <Picker.Item label="22.30" value="22.30"/>
                        <Picker.Item label="23.00" value="23.00" />
                        <Picker.Item label="23.30" value="23.30"/>
        </Picker>
         
        {/* <TextInput style={styles.inputs}
              placeholder="Time "
              keyboardType="number-pad"
              borderBottomColor='red'
              borderColor='red' >
               
              </TextInput> */}
      </View>
      <View style={styles.timeit}>
        <Text style={styles.teto}>TotalHours</Text>
        <TextInput style={styles.inputs}
              placeholder="01:00:00"
              keyboardType="number-pad"
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
    backgroundColor:'#42A5F5'
  },
  title: {
    // textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    padding: 10,
    marginRight:150,
    paddingLeft:42,
    paddingTop:50,
    paddingBottom:10,
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 2
    },
  },
  textcontainer:{
    backgroundColor:'pink',
    width:350,
    // height:4
    // flexDirection:'row'
  },
  datePickerStyle: {
    width: 290,
    marginRight:1,
    paddingBottom:10,
    marginRight:15,
    paddingRight:15,
    paddingLeft:10,
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
  marginRight:320,
  marginLeft:20,
  paddingBottom:10,
  flexDirection:'row'
}
});