import React from 'react';
import { View, Picker } from 'react-native';

class App extends React.Component {
  constructor()
  {
    super();
    this.state={selectedLable:''};
  }

  show=(value)=>
  {
    alert(value);
    this.setState({selectedLable:value});
  }
  
  render () {
    return(
      <View>
     <Picker 
          selectedValue={this.state.selectedLable}
          onValueChange={this.show.bind()} >
       <Picker.Item label='Select a course' value='0' color="#FF0000"></Picker.Item>
       <Picker.Item label='React' value='5000'></Picker.Item>
       <Picker.Item label='Javascript' value='4000'></Picker.Item>
       <Picker.Item label='OOPS' value='3000'></Picker.Item>
     </Picker>
     </View>
    );
  }
}
export default App;