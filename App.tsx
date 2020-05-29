/*
 * File: App.tsx
 * Project: moovee-app
 * File Created: Tuesday, 12th May 2020 12:38:42 am
 * Author: Adithya Sreyaj
 * -----
 * Last Modified: Friday, 29th May 2020 10:36:18 pm
 * Modified By: Adithya Sreyaj<adi.sreyaj@gmail.com>
 * -----
 */

import React, { Fragment, useState } from 'react';
import {
  StyleSheet,
  Platform,
  StatusBar,
  ScrollView,
  View,
} from 'react-native';
import { AppLoading } from 'expo';
import { loadAsync } from 'expo-font';

import Header from './components/Header/Header';
import HomePage from './pages/Home';
import BottomNavbar from './components/BottomNavbar/BottomNavbar';
import MovieDetail from './pages/MovieDetail/MovieDetail';

function loadFonts() {
  return loadAsync({
    Inter: require('./assets/fonts/Inter-Regular.ttf'),
    'Inter-SemiBold': require('./assets/fonts/Inter-Medium.ttf'),
    'Inter-Bold': require('./assets/fonts/Inter-Bold.ttf'),
  });
}

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

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
    <View style={styles.container}>
      <ScrollView>
        {/* <HomePage /> */}
        <MovieDetail />
      </ScrollView>
      <BottomNavbar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
    // paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
});
