import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import {connect} from 'react-redux';

class CounterApp extends Component {

//   state={
//     counter: 0
//   }

//   incrementCounter = () => {
//     this.setState({ counter:this.state.counter + 1})
//   }

//   decrementCounter = () => {
//     this.setState({ counter:this.state.counter - 1})
//   }
  render(){
    return(
      <View style={styles.container}>
      <View style={{ flexDirection: 'row', width: 200, justifyContent: 'space-around'}} />
      <TouchableOpacity onPress={this.props.incrementCounter}>
        <Text style={{fontSize: 30, color:'#9AC4F8', backgroundColor:'#000', fontWeight:'bold'}}>INCREMENT</Text>
      </TouchableOpacity>
       <Text style={{fontSize: 30, fontWeight:'bold' }}>{this.props.counter}</Text>
      <TouchableOpacity onPress={this.props.decrementCounter}>
        <Text style={{fontSize: 30, color:'#9AC4F8', backgroundColor:'#000', fontWeight:'bold'}}>DECREMENT</Text>
      </TouchableOpacity>
        
      </View>
    );
  }
}

function mapStateToProps(state) {
    return {
        counter : state.counter
    }
}

function mapDispatchToProps(dispatch) {
    return {
        incrementCounter : () => dispatch({type:'INCREMENT_COUNTER'}),
        decrementCounter : () => dispatch({type:'DECREMENT_COUNTER'}),
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(CounterApp)

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'pink'
  }
});