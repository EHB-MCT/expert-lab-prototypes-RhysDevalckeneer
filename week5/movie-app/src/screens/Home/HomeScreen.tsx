import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

import Container from '../../layouts/Container';

type Props = {
  navigation: any;
}

function HomeScreen ({ navigation }: Props) {
  return (
    <View>
      <Container>
        <Text>Home Screen</Text>
        <Button
          title="Fightclub"
          onPress={() => navigation.navigate('Details', { id: 550 })}
        />
        <Button
          title="Wakanda Forever"
          onPress={() => navigation.navigate('Details', { id: 505642 })}
        />
        <Button
          title="Avatar"
          onPress={() => navigation.navigate('Details', { id: 19995 })}
        />
      </Container>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})