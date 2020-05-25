/*
 * File: Search.tsx
 * Project: moovee-app
 * File Created: Sunday, 24th May 2020 11:04:44 pm
 * Author: Adithya Sreyaj
 * -----
 * Last Modified: Monday, 25th May 2020 11:48:52 am
 * Modified By: Adithya Sreyaj<adi.sreyaj@gmail.com>
 * -----
 */

import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

export default function SearchBar({
  searched,
  searchTerm,
}: {
  searched: any;
  searchTerm: string;
}) {
  return (
    <View style={styles.searchContainer}>
      <Ionicons name="md-search" size={24} color="#444" />
      <View style={styles.searchInput}>
        <TextInput
          placeholder="Search your fav movies"
          onChange={({ nativeEvent }) => searched(nativeEvent.text)}
          value={searchTerm}
        />
      </View>
      <AntDesign name="filter" size={24} color="#444" />
    </View>
  );
}

const styles = StyleSheet.create({
  searchContainer: {
    width: '95%',
    marginTop: 24,
    marginBottom: 24,
    paddingHorizontal: 16,
    backgroundColor: '#fff',
    borderRadius: 4,
    elevation: 2,
    paddingVertical: 4,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  searchInput: {
    flex: 1,
    padding: 12,
    fontSize: 18,
    lineHeight: 20,
    paddingLeft: 16,
  },
});
