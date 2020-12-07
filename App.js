import React from 'react';
import { View, Text , Modal , Button } from 'react-native';

class App extends React.Component {
  constructor ()
  {
    super();
    this.state={
      show:false
    }
  }

  render () {
    return(
      <View style= {{ flex:1, marginTop: 80 }}>
        <Text style= {{ fontSize: 100 , fontWeight: 'bold'}}>Hello Modal</Text>
        <Button title="open modal" onPress={()=>{this.setState({show:true})}}  />
        <Modal
        transparent={true}
        visible={this.state.show}
         >
         <View style={{ backgroundColor:'#000000aa',flex:1}}>
         <View style={{ backgroundColor:'#fff', margin:50, padding:40, borderRadius: 10, flex:1 }}>
         <Text style={{ fontSize: 50 }}>Welcome to React-Native</Text>
         <Button title="Close modal" onPress={()=>{this.setState({show:false})}}  />

         </View>
        
         </View>
         
        </Modal>
      </View>
    )
  }
}
export default App;