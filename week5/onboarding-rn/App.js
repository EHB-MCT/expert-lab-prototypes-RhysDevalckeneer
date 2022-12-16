import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';

export default function App() {
  return (
  <Onboarding
    onDone={() => console.log('done')}
    pages={[
      {
        backgroundColor: '#fafafa',
        image: <Image source={{uri: 'https://via.placeholder.com/150'}} />,
        title: 'Onboarding',
        subtitle: 'Done with React Native Onboarding Swiper',
      },
      {
        backgroundColor: '#fafafa',
        image: <Image source={{uri: 'https://via.placeholder.com/150'}} />,
        title: 'second screen',
        subtitle: 'this is the second screen from the onboarding',
      },
      {
        backgroundColor: '#fafafa',
        image: <Image source={{uri: 'https://via.placeholder.com/150'}} />,
        title: 'and tht last screen',
        subtitle: "is this the onboarding",
      },
    ]}
  />
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
