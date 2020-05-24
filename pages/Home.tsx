/*
 * File: Home.tsx
 * Project: moovee-app
 * File Created: Sunday, 24th May 2020 11:05:48 pm
 * Author: Adithya Sreyaj
 * -----
 * Last Modified: Sunday, 24th May 2020 11:56:40 pm
 * Modified By: Adithya Sreyaj<adi.sreyaj@gmail.com>
 * -----
 */

import React, { useState } from 'react';
import MovieContainer from '../components/MovieContainer/MovieContainer';
import { View } from 'react-native';
import SearchBar from '../components/Search/Search';

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
      <SearchBar
        searched={(searchText: string) => searchHandler(searchText)}
        searchTerm={searchTerm}
      />
      <MovieContainer filter={{ searchTerm }} />
    </View>
  );
}
