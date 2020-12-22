import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { useDispatch,useSelector } from 'react-redux';
import { addition,subtraction } from './store/action';

const Counters =(props) => {
    const data=useSelector((state)=> state);
    const{counter,name} = data;
    const dispatch=useDispatch();
    return(
        <View style ={styles.container}>
            <View style={styles.textView}>
            <TouchableOpacity onPress={()=>dispatch(addition())}>
                <Text style={style.touchableText }>ID</Text>
            </TouchableOpacity>
            <Text style={style.number}>{counter}</Text>
            <Text style={style.number}>{name}</Text>

            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center'
      },
      textView:{
        flexDirection: 'row',
      },
      touchableText:{
          fontSize:20,
      },
      number:{
          fontSize:20,
          paddingLeft:10,
      },
})