import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'


function HomeScreen({ navigation }) {
    return (
        <View>
            <Text>Home Screen</Text>
            <Button title='go to details'
            onPress={() => navigation.navigate('Details')} />
        </View>
    )
}


function DetailScreen() {
    return (
        <View>
            <Text>Detail Screen</Text>
        </View>
    )
}

const Stack = createStackNavigator()

export default function App() {
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Home'>
                <Stack.Screen name='Home' component={HomeScreen} />
                <Stack.Screen name='Details' component={DetailScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
})