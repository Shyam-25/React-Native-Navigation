import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createDrawerNavigator}from '@react-navigation/drawer';

import Home from '../Screens/Home';
import Details from '../Screens/Details';
import screen from '../Screens/screen';

const Drawer = createDrawerNavigator();
function MainStackNavigator() {
  return (
    
    <NavigationContainer>
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Details" component={Details} />
      <Drawer.Screen name="Screen" component={screen} />
    </Drawer.Navigator>
  </NavigationContainer>
  );
}

export default MainStackNavigator;
