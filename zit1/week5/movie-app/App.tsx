import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { Button, StyleSheet, View, Text } from 'react-native';
import BottomTabNav from './src/navigation/BottomTabNav';

import { NavigationContainer } from '@react-navigation/native';


type Props = {
  response: any
}

export default function App({} : Props) {
  return (
    <>
    <NavigationContainer>
      <BottomTabNav />
      <StatusBar style="auto" />
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
