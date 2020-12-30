import React, { useState } from 'react';
import {View, Text, Animated, TouchableOpacity} from 'react-native';

const App = () => {

    const value = useState(new Animated.ValueXY({ x:0, y:0})) [0]

    function move() {
        Animated.timing(value,{
            toValue: { x:200, y:500},
            duration:1000,
            useNativeDriver: false
        }).start()

    }
    return (
        <View>
            <Animated.View style={value.getLayout()}>
                <View
                  style={{
                      width:100,
                      height:100,
                      backgroundColor:'pink'
                  }} />
            </Animated.View>
            <TouchableOpacity onPress={move}>
                <Text>HELLO</Text>
            </TouchableOpacity>
        </View>
    )
}

export default App;