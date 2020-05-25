/*
 * File: App.tsx
 * Project: moovee-app
 * File Created: Tuesday, 12th May 2020 12:38:42 am
 * Author: Adithya Sreyaj
 * -----
 * Last Modified: Monday, 25th May 2020 1:57:06 am
 * Modified By: Adithya Sreyaj<adi.sreyaj@gmail.com>
 * -----
 */

import React, { Fragment, useState } from 'react';
import { StyleSheet, SafeAreaView, Platform, StatusBar } from 'react-native';

import Header from './components/Header/Header';
import HomePage from './pages/Home';
import Menu from './components/Menu/Menu';

export default function App() {
  const [menuVisible, setMenuVisible] = useState(false);

  const openMenu = () => {
    setMenuVisible(true);
  };
  const closeMenu = () => {
    setMenuVisible(false);
  };
  return (
    <SafeAreaView style={styles.container}>
      <Menu visible={menuVisible} closeMenu={() => closeMenu()} />
      <Header openMenu={() => openMenu()} />
      <HomePage />
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
