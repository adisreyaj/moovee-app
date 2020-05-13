/*
 * File: App.tsx
 * Project: moovee-app
 * File Created: Tuesday, 12th May 2020 12:38:42 am
 * Author: Adithya Sreyaj
 * -----
 * Last Modified: Wednesday, 13th May 2020 9:33:03 pm
 * Modified By: Adithya Sreyaj<adi.sreyaj@gmail.com>
 * -----
 */

import React from 'react';
import { StyleSheet, SafeAreaView, Platform, StatusBar } from 'react-native';

import Header from './components/Header/Header';
import MovieContainer from './components/MovieContainer/MovieContainer';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <MovieContainer />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
});
