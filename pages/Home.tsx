/*
 * File: Home.tsx
 * Project: moovee-app
 * File Created: Sunday, 24th May 2020 11:05:48 pm
 * Author: Adithya Sreyaj
 * -----
 * Last Modified: Monday, 25th May 2020 10:20:11 pm
 * Modified By: Adithya Sreyaj<adi.sreyaj@gmail.com>
 * -----
 */

import React, { useState } from 'react';
import MovieContainer from '../components/MovieContainer/MovieContainer';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/Search/Search';
import { COLORS } from '../config/colors';

export default function HomePage() {
  const [searchTerm, setSearchTerm] = useState('');
  const searchHandler = (searchText: string) => {
    setSearchTerm(searchText);
  };

  return (
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
  );
}

const styles = StyleSheet.create({
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
