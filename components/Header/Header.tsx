/*
 * File: Header.tsx
 * Project: moovee-app
 * File Created: Wednesday, 13th May 2020 9:00:06 pm
 * Author: Adithya Sreyaj
 * -----
 * Last Modified: Wednesday, 13th May 2020 11:27:32 pm
 * Modified By: Adithya Sreyaj<adi.sreyaj@gmail.com>
 * -----
 */

import React from 'react';
import { View, Image, StyleSheet, Platform, StatusBar } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Header = () => {
  return (
    <View style={styles.header}>
      <Image
        fadeDuration={500}
        source={require('../../assets/icon.png')}
        style={styles.logo}
      />
      <Ionicons name="md-menu" size={24} color="#000" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  header: {
    display: 'flex',
    height: 80,
    paddingLeft: 24,
    paddingRight: 24,
    flexDirection: 'row',
    flexWrap: 'nowrap',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
    elevation: 1,
  },
  logo: {
    width: 150,
    height: 60,
    resizeMode: 'contain',
  },
});

export default Header;
