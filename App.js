import React,{Component} from 'react';
import {Text,View,Button} from 'react-native';

export default class App extends Component
{
   Task1=()=>
   {
     alert("Welcome to Chennai");
   }

   Task2=(Num)=>
   {
     alert(Num);
   }

  render()
  {
    return(
      <View>
        <Button title="Button1" onPress={this.Task1}></Button>

        <Button title="Button2" onPress={this.Task2.bind(this,100)}></Button>
      </View>
    );
  }
}
       