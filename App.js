import React, { useState, useEffect } from 'react';
import { StyleSheet , Text, View, SafeAreaView, FlatList, ActivityIndicator } from 'react-native';

const movieURL = 'https://reactnative.dev/movies.json';

const App = () => {

  const [isLoading, setLoading ] = useState(true);
  const [data, setData] = useState([]);
  const [title, setTitle] = useState ([]);
  const [description, setDescription] = useState ([]);

  useEffect(() => {
    fetch(movieURL)
    .then((response) => response.json())
    .then((json)=> {
      setData(json.movies);
      setTitle(json.title);
      setDescription(json.description);
  })
    .catch((error) => alert(error))
    .finally(setLoading(false));
  });
  return (
    <SafeAreaView style = {styles.container}>
    {isLoading ? (<ActivityIndicator /> 
    ) : (
      <View>
      <Text style={styles.title}>{title}</Text>
      <View style={{ borderBottomWidth: 1, marginBottom: 10}} />
      <FlatList 
      data = {data}
      keyExtractor = {({id}, index) => id}
      renderItem={({ item }) => (
        <View style={{ paddingBottom: 10}} >
        <Text style={styles.movieText}>
          {item.title}
          {item.releaseYear}
        </Text>
        </View>
      )}
    />
    <Text style={styles.description}>{description}</Text>
    </View>
    )}
      {/* <Text>HIIII</Text> */}
    </SafeAreaView>
  );

};
export default App;

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  movieText:{
    fontSize: 25,
    fontWeight: '200',
  },
  title:{
    fontSize: 30,
    fontWeight: 'bold',
  },
  description:{
    textAlign: 'center',
    marginBottom: 15,
    fontWeight: "200"
  },
});