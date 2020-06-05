/*
 * File: Home.tsx
 * Project: moovee-app
 * File Created: Sunday, 24th May 2020 11:05:48 pm
 * Author: Adithya Sreyaj
 * -----
 * Last Modified: Friday, 5th June 2020 10:48:39 pm
 * Modified By: Adithya Sreyaj<adi.sreyaj@gmail.com>
 * -----
 */

import React, { useState } from 'react';
import MovieContainer from '../../components/MovieContainer/MovieContainer';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  ScrollView,
} from 'react-native';
import SearchBar from '../../components/Search/Search';
import { COLORS } from '../../config/colors';
import Header from '../../components/Header/Header';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
export default function HomePage({ navigation }: BottomTabBarProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const searchHandler = (searchText: string) => {
    setSearchTerm(searchText);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Header />
        <View
          style={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Text style={styles.welcomeText}>Hi Zoya,</Text>
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
    backgroundColor: COLORS.bgLight,
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
