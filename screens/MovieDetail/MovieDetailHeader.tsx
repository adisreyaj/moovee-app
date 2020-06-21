/*
 * File: MovieDetailHeader.tsx
 * Project: moovee-app
 * File Created: Friday, 29th May 2020 9:33:51 pm
 * Author: Adithya Sreyaj
 * -----
 * Last Modified: Friday, 5th June 2020 11:09:45 pm
 * Modified By: Adithya Sreyaj<adi.sreyaj@gmail.com>
 * -----
 */
import React from 'react';
import { View, Image, StyleSheet, Text, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

import HeartPop from '../../components/HeartPop';
import { TYPOGRAPHY } from '../../config/typography';
import { useDispatch } from 'react-redux';
import { TOGGLE_FAVORITE, toggleFavorite } from '../../store/actions/favorites';
import { DEVICE_WIDTH, DEVICE_HEIGHT } from '../../config/constants';

export default function MovieDetailHeader(props) {
  const dispatch = useDispatch();

  const toggleFavoriteMovie = (movieId: string) => {
    console.log({ movieId });
    dispatch(toggleFavorite(movieId));
  };

  return (
    <View style={styles.header}>
      <View style={styles.headerImage}>
        <Image
          style={{ resizeMode: 'cover' }}
          resizeMode={'cover'}
          source={{
            width: DEVICE_WIDTH,
            height: DEVICE_HEIGHT,
            uri: `https://image.tmdb.org/t/p/original${props.poster_path}`,
          }}
        />
      </View>

      <View style={styles.headerMeta}>
        <View style={styles.headerMetaSuperSet}>
          <Text style={styles.headerMetaSuperSetText}>
            {props.release_date.split('-')[0]}
          </Text>
          <Text style={styles.headerMetaSuperSetText}>Action</Text>
        </View>
        <Text style={styles.movieName}>{props.title}</Text>
        <Text style={styles.movieDuration}>2h 38min</Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginVertical: 16,
          }}
        >
          {Array(5)
            .fill(true)
            .map((_, i) => {
              return (
                <Ionicons
                  key={i}
                  style={{ marginHorizontal: 4 }}
                  name="md-star"
                  size={24}
                  color={i < props.vote_average / 2 ? '#f45d60' : '#f4f4f4'}
                />
              );
            })}
          <Text style={{ color: 'white', marginLeft: 4 }}>
            {props.vote_count} Ratings
          </Text>
        </View>
      </View>
      <View style={styles.favoritesButton}>
        <HeartPop size={24} toggleFavorite={() => toggleFavoriteMovie('123')} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 700,
  },
  headerImage: {
    zIndex: 0,
  },
  headerOverlay: {
    position: 'absolute',
    width: '100%',
    height: 700,
    zIndex: 1,
  },
  headerMeta: {
    position: 'absolute',
    paddingHorizontal: 24,
    bottom: 16,
    zIndex: 3,
  },
  headerMetaSuperSet: {
    flexDirection: 'row',
    ...TYPOGRAPHY.body,
  },
  headerMetaSuperSetText: {
    color: '#fff',
    fontSize: 16,
    marginRight: 12,
    paddingHorizontal: 12,
    paddingVertical: 4,
    backgroundColor: 'rgba(0,0,0,0.7)',
    borderRadius: 4,
    ...TYPOGRAPHY.body,
  },
  favoritesButton: {
    position: 'absolute',
    right: 32,
    zIndex: 2,
    bottom: -30,
    elevation: 15,
    backgroundColor: '#fff',
    width: 60,
    height: 60,
    borderRadius: 30,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  movieName: {
    fontSize: Dimensions.get('window').width > 400 ? 36 : 32,
    color: '#fff',
    ...TYPOGRAPHY.heading,
  },
  movieTagName: {
    color: '#fff',
  },
  movieDuration: {
    color: '#fff',
    width: 85,
    paddingHorizontal: 12,
    paddingVertical: 4,
    backgroundColor: 'rgba(0,0,0,0.7)',
    borderRadius: 4,
  },
});
