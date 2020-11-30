import React from 'react';
import { Stylesheet, Text, View, Flatlist } from 'react-native';

export default function App() {
  const [people, setPeople] = useState([
        { name: 'Ashwin', id:'1' },
        { name: 'Shyam', id:'2'},
        { name: 'Sundar', id:'3'},
        { name: 'Ramesh', id:'4'},
        { name: 'jai', id:'5'},
        { name: 'kumar', id:'6'},
  ]);

  return(
    <View style={styles.container}>
    
    <Flatlist
       numColumns={2}
       keyExtractor={(item) => item.id}
       data={people}
       renderItem={({ item })=>(
         <Text style={styles.item}>{item.name}</Text>
       )}
    />

    </View>


  );
}
                         
const styles = Stylesheet.create({
  container: {
       flex:1,
       backgroundColor: '#fff',
       paddingTop: 40,
       paddingHorizontal: 20
  },
  item:{
    marginTop: 24,
    padding: 30,
    backgroundcolor: 'pink',
    fontSize: 25,
    marginHorizontal: 10;
    marginTop: 24;
  }
})