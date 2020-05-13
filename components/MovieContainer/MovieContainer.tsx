/*
 * File: MovieContainer.tsx
 * Project: moovee-app
 * File Created: Wednesday, 13th May 2020 9:29:58 pm
 * Author: Adithya Sreyaj
 * -----
 * Last Modified: Wednesday, 13th May 2020 11:48:27 pm
 * Modified By: Adithya Sreyaj<adi.sreyaj@gmail.com>
 * -----
 */

import React from 'react';
import {
  View,
  Dimensions,
  StatusBar,
  ScrollView,
  FlatList,
} from 'react-native';

import MovieCard from '../MovieCard/MovieCard';
import { mockResponse } from '../../assets/data';
const screenHeight = Math.round(Dimensions.get('window').height - 80);
const screenWidth = Math.round(Dimensions.get('window').width);

export default function MovieContainer() {
  return (
    <FlatList
      contentContainerStyle={{
        display: 'flex',
        justifyContent: 'center',
        paddingBottom: 42,
        paddingLeft: 8,
        paddingRight: 8,
      }}
      style={{
        backgroundColor: '#f7f7f7',
        paddingTop: 16,
        paddingBottom: 16,
      }}
      numColumns={2}
      data={mockResponse.results}
      renderItem={({ item }) => <MovieCard data={item} />}
      keyExtractor={(item) => `${item.id}`}
    />
  );
}
