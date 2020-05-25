/*
 * File: App.tsx
 * Project: moovee-app
 * File Created: Tuesday, 12th May 2020 12:38:42 am
 * Author: Adithya Sreyaj
 * -----
 * Last Modified: Monday, 25th May 2020 10:21:21 pm
 * Modified By: Adithya Sreyaj<adi.sreyaj@gmail.com>
 * -----
 */

import React, { Fragment, useState } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  ScrollView,
} from 'react-native';

import Header from './components/Header/Header';
import HomePage from './pages/Home';
import BottomNavbar from './components/BottomNavbar/BottomNavbar';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <ScrollView>
        <HomePage />
      </ScrollView>
      <BottomNavbar />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
});
