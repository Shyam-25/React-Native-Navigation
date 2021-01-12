import {View, Text,TouchableOpacity, StyleSheet,Picker, TextInput, Modal} from 'react-native';
import React, { Component } from "react";
import Icon  from 'react-native-vector-icons/Feather';
import {Calendar} from 'react-native-calendars';
class PermissionApply extends Component {
    constructor(props){
      super(props);
      const current_date=new Date();
      const current_day= new Date().getDate();
      const current_month= new Date().getMonth();
      const current_year = new Date().getFullYear();
      this.state={
        isDateEnabled:false,
        dateApplied:[{dateString: current_date, day: current_day, month:current_month+1, timestamp: 1331683200000, year: current_year}],
        timeValue:'',
        totalHours:'',
        descriptionValue:'',
    };
    }
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.insideContainer}>
                    <Text style={styles.dateText}> Date </Text>
                    <View style={styles.dateView}> 
                        <TextInput style={styles.dateInput} placeholder='20/12/2020' value={this.state.dateApplied.dateString}/>
                        <Icon name='calendar' style={styles.CalendarIcon}
                        size={30} color='blue' 
                        onPress={()=>this.setState({isDateEnabled:true})}/>
                    
                        <Modal style={styles.modalDate}
                        visible={this.state.isDateEnabled}
                        transparent={true}   >            
                        <View style={styles.modalDate}>
                            <Calendar
                            style={styles.calendarDetails}
                            current={new Date().getDate}
                            hideExtraDays={true}
                            onDayPress={(day) => {console.log('selected day', day);this.setState({isDateEnabled:false,dateApplied:day});}}
                            maxDate={'2025-05-30'}
                            minDate={new Date().getDate}
                            showWeekNumbers={true}
                            theme={{
                                backgroundColor: '#ffffff',
                                calendarBackground: '#ffffff',
                                textSectionTitleColor: '#b6c1cd',
                                textSectionTitleDisabledColor: '#d9e1e8',
                                selectedDayBackgroundColor: '#00adf5',
                                selectedDayTextColor: '#ffffff',
                                todayTextColor: '#00adf5',
                                dayTextColor: '#2d4150',
                                textDisabledColor: '#d9e1e8',
                                dotColor: '#00adf5',
                                selectedDotColor: '#ffffff',
                                textDayFontWeight: '300',
                                textMonthFontWeight: 'bold',
                                textDayHeaderFontWeight: '300',
                                textDayFontSize: 14,
                                textMonthFontSize: 14,
                                textDayHeaderFontSize: 14,
                            }}
                            enableSwipeMonths={true}/>
                        </View>
                        </Modal>
                    </View>

                    <View style={styles.timeView}>
                        <Text style={styles.timeText}>Time</Text>
                        <Picker style={styles.pickers}
                        selectedValue={this.state.timeValue}
                        onValueChange={(itemValue, itemIndex) => {this.setState({timeValue:itemValue,totalHours:'01:00:00'})}}>
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
                    </View>       
                    
                    <View style={styles.hoursView}>
                        <Text style={styles.hoursText}>Total Hours</Text>
                        <TextInput style={styles.hoursInput} value={this.state.totalHours} />
                    </View>
                        
                    <View style={styles.descriptionView}>
                        <Text style={styles.descriptionText}>Description</Text>
                        <TextInput style={styles.descriptionInput} value={this.state.descriptionValue} multiline={true} />
                    </View>

                    <TouchableOpacity style={styles.submitContainer} onPress={this.validate}>
                    <Text style={styles.submitText}>Submit</Text>
                    </TouchableOpacity>

                </View>
            </View>

        )
    }
}

const styles = StyleSheet.create({
    container:{
        padding:20,
        justifyContent:'center',
        alignItems:'center',
        alignContent:'center',
        flex:1,
        backgroundColor:"pink"
    },
    insideContainer:{
        // elevation:45,
        borderRadius:10,
        backgroundColor:'white',
        width:350,
        padding:20,
        backgroundColor:"grey"
    },
    dateText:{
        fontSize:18,
        marginBottom:10,
    },
    dateView:{
        flexDirection:'row',
        marginBottom:10,
    },
    dateInput:{
        borderEndWidth:2,
        borderColor:'blue',
        height:40,
        width:250,
        borderRadius:10,
        borderWidth:2,
    },
    CalendarIcon:{
        marginLeft:10,
        //marginTop:10,
    },
    modalDate:{
        justifyContent:'center',
        alignItems:'center',
        elevation:4,
        height:150,
        marginTop:250,
        marginLeft:20,
        marginRight:20,
        backgroundColor:'white',
        flex: .8,
        borderRadius:10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        padding:10,
    },
    calendarDetails:{
        borderWidth: 1,
        borderColor: 'blue',
        //height: 200,
    },
    timeText:{
        fontSize:18,
        marginBottom:10,
    },
    hoursView:{
        marginBottom:10,
    },
    hoursText:{
        fontSize:18,
        marginBottom:10,
    },
    hoursInput:{
        borderEndWidth:2,
        borderColor:'blue',
        height:40,
        width:250,
        borderRadius:10,
        borderWidth:2,
    },
    descriptionView:{
        marginBottom:10,
    },
    descriptionText:{
        fontSize:18,
        marginBottom:10,
    },
    descriptionInput:{
        borderEndWidth:2,
        borderColor:'blue',
        height:40,
        width:250,
        borderRadius:10,
        borderWidth:2,
    },
    submitContainer:{
        justifyContent:'center',
        elevation:5,
        backgroundColor:'pink',
        height:30,
        alignItems:'center',
        width:100,
        marginLeft:100,
        borderRadius:10,
      },
    submitText:{
        fontSize:18,
    },
});
export default PermissionApply;