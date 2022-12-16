import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { collection, getDoc, getDocs } from 'firebase/firestore';
import { db } from '../../firebase/config';

type Props = {}

function FavoritesScreen ({}: Props) {

  const [favorites, setFavorites] = useState<any[]>([]);

  const getFavorites = async () => {
    await getDocs(collection(db, "favorites"))
      .then((querySnapshot)=>{               
          const newData = querySnapshot.docs
              .map((doc) => ({...doc.data(), id:doc.id }));
          setFavorites(newData);                
          console.log(newData);
      })
  }

  useEffect(()=> {
    getFavorites();
  }, [])

  function showFavs () {
    return favorites.map((movie, i) => {
      i++
      return (
        <View key={i}>
          <Text>{movie.movie_id}</Text>
          <Image source={{
            uri: `http://image.tmdb.org/t/p/w500${movie.poster_path}`
          }} style={styles.poster}/>
        </View>
        
      )
    })
  }

  return (
    <>
      <Text>Favorites Screen</Text>
      <ScrollView>
        { showFavs() }
      </ScrollView>
    </>
  )
}

export default FavoritesScreen

const styles = StyleSheet.create({
  poster: {
    width: 110,
    height: 160,
    resizeMode: "contain",
    borderRadius: 3
  }
})