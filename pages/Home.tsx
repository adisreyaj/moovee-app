/*
 * File: Home.tsx
 * Project: moovee-app
 * File Created: Sunday, 24th May 2020 11:05:48 pm
 * Author: Adithya Sreyaj
 * -----
 * Last Modified: Saturday, 30th May 2020 1:29:24 am
 * Modified By: Adithya Sreyaj<adi.sreyaj@gmail.com>
 * -----
 */

import React, { useState } from 'react';
import MovieContainer from '../components/MovieContainer/MovieContainer';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  ScrollView,
} from 'react-native';
import SearchBar from '../components/Search/Search';
import { COLORS } from '../config/colors';
import Header from '../components/Header/Header';
export default function HomePage() {
  const [searchTerm, setSearchTerm] = useState('');
  const searchHandler = (searchText: string) => {
    setSearchTerm(searchText);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <ScrollView>
        <View
          style={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Text style={styles.welcomeText}>Hi Maicy,</Text>
          <Text style={styles.welcomeTextSub}>
            Find and curate your favorite movies
          </Text>
          <SearchBar
            searched={(searchText: string) => searchHandler(searchText)}
            searchTerm={searchTerm}
          />
          <MovieContainer filter={{ searchTerm }} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  welcomeText: {
    textAlign: 'left',
    width: '100%',
    paddingHorizontal: 16,
    marginTop: 24,
    fontWeight: '700',
    fontSize: 32,
    color: COLORS.textPrimary,
  },
  welcomeTextSub: {
    textAlign: 'left',
    width: '100%',
    paddingHorizontal: 16,
    fontSize: 18,
    color: COLORS.textSecondary,
  },
});
