/*
 * File: MovieContainer.tsx
 * Project: moovee-app
 * File Created: Wednesday, 13th May 2020 9:29:58 pm
 * Author: Adithya Sreyaj
 * -----
 * Last Modified: Wednesday, 3rd June 2020 8:52:16 pm
 * Modified By: Adithya Sreyaj<adi.sreyaj@gmail.com>
 * -----
 */

import React, { useState, useEffect } from 'react';
import { View, Dimensions, FlatList } from 'react-native';
import { useSelector } from 'react-redux';

import MovieCard from '../MovieCard/MovieCard';
const screenHeight = Math.round(Dimensions.get('window').height - 80);
const screenWidth = Math.round(Dimensions.get('window').width);

export default function MovieContainer({
  filter,
}: {
  filter: { searchTerm: string; genres?: string[] };
}) {
  const mockResponse = useSelector((state: any) => state.movies.movies);
  const [movies, setMovies] = useState(mockResponse.results);

  useEffect(() => {
    const { searchTerm } = filter;
    if (searchTerm) {
      const filteredMovies = mockResponse.results.filter((movie: any) =>
        movie.title.toLowerCase().includes(searchTerm.toLowerCase()),
      );
      setMovies(filteredMovies);
    } else {
      setMovies(mockResponse.results);
    }
  }, [filter]);

  return (
    <View style={{ width: '100%' }}>
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
          flexGrow: 1,
        }}
        numColumns={2}
        data={movies}
        renderItem={({ item }) => <MovieCard data={item} />}
        keyExtractor={(item: any) => `${item.id}`}
      />
    </View>
  );
}
