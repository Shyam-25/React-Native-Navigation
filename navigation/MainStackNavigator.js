import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../Screens/Home'
import Details from '../Screens/Details';
const Stack = createStackNavigator();

function MainStackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: 'Home Screen' }}
        />
        <Stack.Screen
          name="Details"
          component={Details}
          options={{ title: 'Detail Screen' }}
        />
      </Stack.Navigator>
      
    </NavigationContainer>
    
  );
}

export default MainStackNavigator;
