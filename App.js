import React from 'react';
import { Text, View, Stylesheet, Switch} from 'react-native';

export default function App(){
  return(
    <View style={Stylesheet.container}>
      <Text style={Stylesheet.Text}>Switch</Text>
      <Switch value={true}/>
    </View>
  );
}
const styles = Stylesheet.create({
  container:{
  flex: 1,
  backgroundColor: '#000000',
  alignItems:'center',
  justfyContent:'center',
},
Text:{
  fontSize: 10,
  color:"#161616"
}
});