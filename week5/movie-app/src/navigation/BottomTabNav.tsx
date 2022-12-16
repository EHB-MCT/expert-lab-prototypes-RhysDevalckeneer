import React from 'react'
import { StyleSheet, Text, View } from 'react-native'


import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from "react-native-vector-icons/Ionicons";

// Import Screens
import HomeScreen from '../screens/Home/HomeScreen';
import SearchScreen from '../screens/Search/SearchScreen';
import FavoritesScreen from '../screens/Favorites/FavoritesScreen';
import SeenScreen from '../screens/Seen/SeenScreen';

import DetailsScreen from '../screens/Details/DetailsScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

type Props = {}

const HomeTabs = ({}: Props) => {
    return(
        <Tab.Navigator
            screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
                let iconName;

                switch(route.name) {
                    case "SearchStack":
                        iconName = focused ? 'search' : 'search-outline';
                        break;
                    case "Favorites":
                        iconName = focused ? 'bookmark' : 'bookmark-outline';
                        break;
                    case "Seen":
                        iconName = focused ? 'eye' : 'eye-outline';
                        break;
                }

                // You can return any component that you like here!
                return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: '#2563eb',
            tabBarInactiveTintColor: '#475569',
            tabBarShowLabel: false,
            tabBarStyle: styles.tabBar,
            })}
        >
            <Tab.Screen name="SearchStack" component={SearchStack} options={{ headerShown: false }}/>
            <Tab.Screen name="Favorites" component={FavoritesScreen} />
            <Tab.Screen name="Seen" component={SeenScreen} />
        </Tab.Navigator>
    )
};

const SearchStack = () => {
    return (
        <Stack.Navigator initialRouteName='Search'>
            <Stack.Screen name='Search' component={SearchScreen} />
            <Stack.Screen name='Details' component={DetailsScreen} options={{ animation: "fade_from_bottom", headerShown: false, }}/>
        </Stack.Navigator>
    )
}

const BottomTabNav = ({}: Props) => {
  return (
    
      <Stack.Navigator>
        <Stack.Screen 
            name="HomeStack" 
            component={HomeTabs} 
            options={{ headerShown: false }} />
      </Stack.Navigator>
  )
}

export default BottomTabNav

const styles = StyleSheet.create({
    tabBar: {
        height: 60,
        elevation: 0,
        borderTopWidth: 0
    }
})