import React from 'react';
import {Text, View, Flatlist, StyleSheet} from 'react-native';

export default class App extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            data : [
                {
                    id: '1',
                    name: 'Non-Veg Briyani',
                    description:'Biryani is a mixed rice dish with its origins among the Muslims of the Indian subcontinent. It is made with Indian spices, rice, and meat, or vegetables'
                },
                {
                    id:'2',
                    name:'Pizza',
                    description:'Pizza is a savory dish of Italian origin consisting of a usually round, flattened base of leavened wheat-based dough topped with tomatoes, cheese'
                },
                {
                    id:'3',
                    name:'Ice Cream',
                    description:'Ice cream is a sweetened frozen food typically eaten as a snack or dessert. It may be made from dairy milk or cream and is flavoured with a sweetener'
                },
                {
                    id:'4',
                    name:'Desert',
                    description:''
                }
            ]
        }
    }

    renderRow = ({ item }) => {
        return (
            <View style = {styles.container}>
            <View style = {styles.inputcontainer}>
                <Text style = {styles.name}>{item.name}</Text>
                <Text style = {styles.description}>{item.description} </Text>}
            </View>


            </View>
        )
    }
    render() {
        return (
            <View >
            <Flatlist
              data={this.state.data}
              renderItem={this.renderRow}
             />
            
              
            </View>
        )
    }
}
const styles = StyleSheet.create ({
    container:{
        flex:1,
        backgroundColor:'pink',
        flexDirection:'row'
    },
    inputcontainer:{
        backgroundColor:'white',
    flexDirection:'column',
    fontStyle: 'italic',
    backgroundColor:'grey',
    fontSize:20
    },
    name:{
        fontSize:20

    },
    description:{
        fontSize:15
    }
})