import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

import Ionicons from 'react-native-vector-icons/Ionicons';

type Props = {}

const FavoriteButton = (props: Props) => {
    let [pressed, setPressed] = useState(false);

    const pressHandler = () => {
        setPressed(!pressed);
    }
  return (
    <TouchableOpacity onPress={pressHandler} {...props}>
        <View style={styles.buttonContainer}>
            <Ionicons name={pressed ? "bookmark" : "bookmark-outline" } size={24} color={pressed ? "#2563eb" : "#64748b" }/>
        </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: 35,
    height: 35,
    padding: 4,
    margin: 5,
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: '#f1f5f9'
  },
});

export default FavoriteButton