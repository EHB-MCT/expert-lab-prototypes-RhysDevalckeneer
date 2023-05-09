import { StyleSheet, SafeAreaView, View, Text} from 'react-native';

export default function SettingsScreen() {
    return (
    <SafeAreaView style={styles.container}>
        <Text>Settings</Text>
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
