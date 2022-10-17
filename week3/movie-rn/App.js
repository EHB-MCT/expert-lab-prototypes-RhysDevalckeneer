import { StatusBar } from 'expo-status-bar';
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeScreen from './src/screens/HomeScreen';
import SearchScreen from './src/screens/SearchScreen';
import SettingsScreen from './src/screens/SettingsScreen';

// Import Styles
import styles from './src/styles/Navigation/TabBarStyle';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <>
      <StatusBar hidden={true}/>
      <NavigationContainer >
        <Tab.Navigator  
          screenOptions={({ route }) => ({
            headerShown: false,
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              switch(route.name) {
                case 'Home':
                  iconName = focused ? 'home' : 'home-outline';
                  break;
                case 'Search':
                    iconName = focused ? 'search' : 'search-outline';
                    break; 
                case 'Favorites':
                  iconName = focused ? 'chatbox' : 'chatbox-outline';
                  break
                case 'Settings':
                  iconName = focused ? 'settings' : 'settings-outline';
                  break;
              } 
              return <Ionicons name={ iconName } size={ size } color={ color } />;
            },
            // tabBarActiveTintColor: '#543FEC',
            tabBarActiveTintColor: '#3E424A',
            tabBarInactiveTintColor: '#9CA3AF',
            tabBarShowLabel: false,
            tabBarStyle: [
              styles.tabBarStyle
            ],
          })}
        >
          <Tab.Screen name="Home" component={HomeScreen} options={{ headerShown: false }}  />
          <Tab.Screen name="Search" component={SearchScreen} options={{ headerShown: false }} />
          <Tab.Screen name="Settings" component={SettingsScreen} options={{ headerShown: false }} />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
}
