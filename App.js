import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import DatePicker from 'react-native-datepicker';

const App = () => {
  const [date, setDate] = useState('20-11-2020');

  return (
    // <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.title}>
          Calender Picker
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
            dateIcon: {
              //display: 'none',
              position: 'absolute',
              left: 0,
              top: 4,
              marginLeft: 0,
            },
            dateInput: {
              marginLeft: 36,
            },
          }}
          onDateChange={(date) => {
            setDate(date);
          }}
        />
      </View>
    // </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'pink'
  },
  title: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    padding: 20,
  },
  datePickerStyle: {
    width: 200,
    marginTop: 20,
  },
});