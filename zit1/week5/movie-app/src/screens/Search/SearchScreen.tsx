import { StyleSheet, Text, View, Image, Dimensions, ScrollView, TextInput, TouchableWithoutFeedback, FlatList } from 'react-native'
import Container from '../../layouts/Container';
import React, { useEffect, useState} from 'react'

import axios from "axios";

type Props = {
  navigation: any
}

type Movie = {
    id: number;
    title: string;
    poster_path: string;
}

function SearchScreen ({navigation }: Props) {
  // Query setup
  const [query, setQuery] = useState("matrix");
  const [movies, setMovies] = useState<any[]>([]);

  useEffect(() => {
    fetchData();
  }, [query])



  const Movie = ( {movie}: { movie: Movie } ) => {
    return (
      <TouchableWithoutFeedback onPress={() => navigation.navigate('Details', { id: `${movie.id}` })} key={`movie_${movie.id}`}>
        <View style={styles.movieCard}>
          <Image source={{
            uri: `https://image.tmdb.org/t/p/w500/${movie.poster_path}?api_key=ace96559b8fb0dd613fdfd48023afa84`
          }} style={styles.moviePoster}/>
          <Text key={movie.id}>
            {movie.title}
          </Text>
        </View>
      </TouchableWithoutFeedback>
    )
  }

  const fetchData = async () => {
    try {
      const {data} = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=ace96559b8fb0dd613fdfd48023afa84&language=en-US&query=${query}&page=1&include_adult=false`)
      setMovies(data.results)
      console.log(data.results);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Container>
      <TextInput
        style={styles.input}
        onChangeText={setQuery}
        value={query}
      />
      <ScrollView style={styles.movieContainer} keyboardShouldPersistTaps={'always'}>
        {movies.map((movie, i) => (
          <Movie movie={movie} key={movie.id} />
      ))}
      
      </ScrollView>
    </Container>
  )
}

export default SearchScreen

const styles = StyleSheet.create({
  movieContainer: {
    width: '100%',
  },
  input: {
    borderWidth: 2,
  },
  movieCard: {
    width: Dimensions.get('screen').width / 2.5 - 20,
    marginHorizontal: 5,
  },
  moviePoster: {
    width: '100%',
    height: 200
  }
})