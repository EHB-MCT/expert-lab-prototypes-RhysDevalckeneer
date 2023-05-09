import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView, View, Text } from 'react-native';

import { gray100 } from '../themes/Colors';

import Searchbar from '../components/Searchbar';
import EmptyList from '../components/NotFound/EmptyList';

export default function SearchScreen() {
    return (
    <SafeAreaView style={styles.container}>
        <View>
            <Searchbar />
        </View>
        <View>
            <EmptyList />
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
