import React, { Component } from 'react';
import {Text, View, StyleSheet, Animated } from 'react-native';

export default function App() {
      const position = new Animated.ValueXY({X:0,Y:0})
     Animated.spring(position,{
        toValue:{X:200,Y:500},
        duration:2000
     }).start()
    

    return (
        <View style={{flex:1}}>
            <Animated.View style={{
                height:50,
                width:50,
                alignItems:'center',
                justifyContent:'center',
                backgroundColor:'pink',
                transform:[
                    {translateX:position.x},
                    {translateY:position.y}
                ]
            }}>
                <Text>Hello</Text>
            </Animated.View>
        </View>
    );
}
    
