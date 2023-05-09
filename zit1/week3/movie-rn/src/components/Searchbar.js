import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, SafeAreaView } from 'react-native';

import { red } from '../themes/Colors';

export default function Searchbar() {
  return (
    <SafeAreaView>
        <View style={styles.searchbar}>
            <Text style={styles.searchTitle}>Searchbar</Text>
        </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    searchbar: {
        height: 55,
        backgroundColor: '#f3f4f6',
        borderRadius: 6,
        justifyContent: 'center',
        alignItems: 'center'
    },
    searchTitle: {
        fontWeight: '700'
    }
});
