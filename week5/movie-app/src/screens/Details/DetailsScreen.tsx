import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, ImageBackground, Image, Alert, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import Ionicons from "react-native-vector-icons/Ionicons";

import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../firebase/config';
import Container from '../../layouts/Container';

import BackButton from '../../components/Button/BackButton';
import SeenButton from '../../components/Button/SeenButton';
// import FavoriteButton from '../../components/Button/FavoriteButton';
import axios from 'axios';


type Props = {
  route: any;
}

function DetailsScreen ({ route }: Props) {
  const { id } = route.params;
  const [movieData, setMovieData] = useState<any[]>([]);

  useEffect(() => {
     getMovieData();
  }, []);

  const getMovieData = () => {
    axios
      .get(`https://api.themoviedb.org/3/movie/${id}?api_key=ace96559b8fb0dd613fdfd48023afa84&language=en-US`)
      .then((response => {
        // console.log(response.data);
        setMovieData(response.data);
      }))
      .catch(error => {
        console.log(error);
      })
  };

  const FavoriteButton = (props: Props) => {
    let [pressed, setPressed] = useState(false);

    const pressHandler = () => {
        setPressed(!pressed);
        Alert.alert('clicked!')


        //send data to firestore
        addDoc(collection(db, "favorites"),{
          movie_id: movieData.id,
          poster_path: movieData.poster_path
        });
    }
    return (
      <TouchableOpacity onPress={pressHandler}>
          <View style={styles.buttonContainer}>
              <Ionicons name={pressed ? "bookmark" : "bookmark-outline" } size={24} color={pressed ? "#2563eb" : "#64748b" }/>
          </View>
      </TouchableOpacity>
    )
  }


  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground 
      source={{ uri: `http://image.tmdb.org/t/p/w500${movieData.backdrop_path}` }}
      style={styles.banner}>
        <BackButton />
      </ImageBackground>
      <Container>
        <View style={styles.movieInfo}>
          <Image 
            source={{ uri: `http://image.tmdb.org/t/p/w500${movieData.poster_path}`}} 
            style={styles.poster}/>
          <View style={styles.movieHeader}>
            <Text style={styles.movieTitle}>{movieData.title}</Text>
            <View style={styles.buttonContainer}>
              {/* <SeenButton onPress={sendDataToFireStore}/> */}
              <FavoriteButton />
            </View>
          </View>            
        </View>

          <View style={styles.descriptionContainer}>
            <View style={styles.descriptTextContainer}>
              <Text style={styles.descriptBold}>Release date:</Text> 
              <Text>{movieData.release_date}</Text>
            </View>
          </View>

          <View>
            <View style={styles.descriptionContainer}>
              <Text style={styles.descriptionTitle}>Description</Text>
              <Text>{movieData.overview}</Text>
            </View>
        </View>
      </Container>
      <StatusBar style="light" />
    </SafeAreaView>
  )
}

export default DetailsScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa'
  },
  banner: {
    height: 195,
  },
  movieInfo: {
    flexDirection: 'row',
  },
  movieHeader: {
    paddingHorizontal: 10,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexWrap: 'wrap'
  },
  movieTitle: {
    fontWeight: '700',
    fontSize: 22,
    marginRight: 26
  },
  descriptionTextContainer: {
    flexDirection: 'row',
    flex: 1,
  },
  descriptionContainer: {
    marginVertical: 10
  },
  descriptionTitle: {
    fontWeight: '700',
    fontSize: 18
  },
  descriptBold: {
    fontWeight: '700'
  },
  poster: {
    width: 110,
    height: 160,
    resizeMode: "contain",
    marginTop: -60,
    borderRadius: 3
  },
  buttonContainer: {
    justifyContent: 'flex-end',
    flexDirection: 'row'
  }
})