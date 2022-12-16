import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

type Props = {}

const FavoriteButton = ({}: Props) => {
    const navigation = useNavigation(); 
  return (
    <TouchableOpacity onPress={() => navigation.goBack()}>
        <View style={styles.buttonContainer}>
            <Ionicons name="arrow-back" size={32} color="#FFF"/>
        </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: 35,
    height: 35,
    padding: 4,
    marginHorizontal: 11,
    marginVertical: 24,
    justifyContent: 'center',
    alignContent: 'center',
  },
});

export default FavoriteButton