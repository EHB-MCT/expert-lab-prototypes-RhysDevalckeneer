import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import * as Location from "expo-location"

import { StyleSheet, Text, View, Dimensions, Platform} from 'react-native';
import MapView, { Callout, Circle, Marker } from 'react-native-maps';

export default function App({ coordinate }) {
  // Ask permission
  let [location, setLocation] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  // get seperate long & lat
  let [latitude, setLatitude] = useState();
  let [longitude, setLongitude] = useState();

  const colors = { black: "#0f172a"}
  const [pin, setPin] = React.useState({
    latitude: 50.89133,
    longitude: 4.33967,
    latitudeDelta: 0.092,
    longitudeDelta: 0.042,
  });

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMessage('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLatitude(location.coords.latitude)
      setLongitude(location.coords.longitude);
      // update location
      setLocation(location.coords);

      // set pin location
      setPin({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude
      })
    })();
  }, []);

  let text = 'Waiting..';
  if (errorMessage) {
    text = errorMessage;
  } else if (location) {
    text = JSON.stringify(location);
  }

  return (
    <>
      <StatusBar style='auto' hidden={true} />
      <Text>Long: {longitude}</Text>
      <Text>Lat: {latitude}</Text>
      <MapView
        style={styles.map}
        showsUserLocation={true}
        followsUserLocation={true}
        provider='google'
      >
          <Marker 
            title="marker Title"
            description='marker description'
            coordinate={pin}
            // pinColor={colors.black}
            region={pin}
            draggable={true}
            onDragStart={(e) => {
              e.nativeEvent.coordinate
            }}
            onDragEnd={(e) => {
              setPin({
                longitude: e.nativeEvent.coordinate.longitude,
                latitude: e.nativeEvent.coordinate.latitude
              });
            }}
          >
            <Callout>
              <Text>You're here!</Text>
            </Callout>
          </Marker>
          <Circle fillColor="#FF000035" center={pin} radius={500} style={styles.mapCircle}/>
      </MapView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 0,
  },
  map: {
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
  },
  mapCircle: {
    backgroundColor: '#FF0'
  },
  text: {
    color: "#F00",
    zIndex: 90,
  }
});
