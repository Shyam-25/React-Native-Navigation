import React,{Component} from 'react';
import {View, Text} from 'react-native';

import {createBottomTabNavigator,createAppContainer} from 'react-navigation';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import {Icon} from 'react-native-elements';

import Profile from './Profile';
import Cart from './Cart';

 class Home extends Component
{
    render()
    {
        return(
            <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                <Text style={{fontSize:40}}>Home Screen</Text>
            </View>
        );
    }
}

const TabNavigator=createMaterialBottomTabNavigator(
    {
        Home:{Screen:Home,
            navigationOptions:{
                tabBarLabel:'Home',
                activeColor:'#ff0',
                inactiveColor:'#000',
                barStyle:{background:'#67baf6'},
                tabBarIcon:()=>(
                    <View>
                        <Icon name={'home'} size={25} style={{color:'#ff0000'}} />
                    </View>
                )

            }
        
        
        
        },
        Home:{Screen:Profile,
            navigationOptions:{
                tabBarLabel:'Profile',
                activeColor:'#ff0',
                inactiveColor:'#000',
                barStyle:{background:'#67baf6'},
                tabBarIcon:()=>(
                    <View>
                        <Icon name={'person'} size={25} style={{color:'#ff0000'}} />
                    </View>
                )

            }
        
        
        
        },
        Home:{Screen:Cart,
            navigationOptions:{
                tabBarLabel:'Cart',
                activeColor:'#ff0',
                inactiveColor:'#000',
                barStyle:{background:'#67baf6'},
                tabBarIcon:()=>(
                    <View>
                        <Icon name={'Shoping Cart'} size={25} style={{color:'#ff0000'}} />
                    </View>
                )

            }
        
        
        
        }
    }
);

export default createAppContainer(TabNavigator);