/*
 * File: App.tsx
 * Project: moovee-app
 * File Created: Tuesday, 12th May 2020 12:38:42 am
 * Author: Adithya Sreyaj
 * -----
 * Last Modified: Saturday, 30th May 2020 1:21:36 am
 * Modified By: Adithya Sreyaj<adi.sreyaj@gmail.com>
 * -----
 */

import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { AppLoading } from 'expo';
import { loadAsync } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomePage from './pages/Home';
import BottomNavbar from './components/BottomNavbar/BottomNavbar';
import MovieDetail from './pages/MovieDetail/MovieDetail';
import FavoritesPage from './pages/Favorites/Favorites';

function loadFonts() {
  return loadAsync({
    Inter: require('./assets/fonts/Inter-Regular.ttf'),
    'Inter-SemiBold': require('./assets/fonts/Inter-Medium.ttf'),
    'Inter-Bold': require('./assets/fonts/Inter-Bold.ttf'),
  });
}

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const Tab = createBottomTabNavigator();

  if (!fontsLoaded)
    return (
      <AppLoading
        startAsync={loadFonts}
        onFinish={() => {
          setFontsLoaded(true);
        }}
      />
    );
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <Tab.Navigator
          initialRouteName="Home"
          tabBar={(props) => <BottomNavbar {...props} />}
        >
          <Tab.Screen name="HOME" component={HomePage} />
          <Tab.Screen name="MovieDetail" component={MovieDetail} />
          <Tab.Screen name="FAVORITES" component={FavoritesPage} />
        </Tab.Navigator>
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
    // paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
});
