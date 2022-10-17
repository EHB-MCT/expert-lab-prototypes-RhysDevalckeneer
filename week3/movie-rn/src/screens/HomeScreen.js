import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView, View, Text } from 'react-native';

import { gray100 } from '../themes/Colors';

import Greeting from '../components/Text/Greeting';
import Title from '../components/Text/Title';
import Subtitle from '../components/Text/Subtitle';
import Searchbar from '../components/Searchbar';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
        <View>
            <Greeting user="stranger!"/>
            <Title title="What movie is it gonna be today?" />
        </View>
        <View style={{backgroundColor:gray100, height:48, borderRadius:6, marginVertical: 16}}>
            <Searchbar />
        </View>
        <View style={styles.list}>
            <Subtitle subtitle="Recently added" />
            <Text>See all</Text>
        </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
  },
  list: {
    marginVertical: 12,
    justifyContent: 'space-between',
    padding:34,
    flexDirection: 'row',
    flex: 1
  }
});
