import React, { Component } from 'react';
import { Text, View, StyleSheet ,TouchableOpacity } from 'react-native';
import {connect} from 'react-redux';

class Counter extends Component {


  render() {

    

    return(
      <View style={styles.container}>
        <View style={{flexDirection: 'row', width:200, justifyContent: 'space-around'}}>
          <TouchableOpacity onPress={this.props.increaseCounter}>
            <Text style={{fontSize:25 }}>ADD</Text>
          </TouchableOpacity>
          <Text style={{ fontSize:25 }}>{this.props.counter}</Text>
          <TouchableOpacity onPress={this.props.decreaseCounter}>
            <Text style={{fontSize:25 }}>SUB</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

function mapStateToProps(state) {
    return {
        counter: state.counter,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        increaseCounter : () => dispatch({type:'INCREASE_COUNTER'}),
        decreaseCounter : () => dispatch({type:'DECREASE_COUNTER'}),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Counter);

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'pink'
  }
});