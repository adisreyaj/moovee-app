/*
 * File: MovieDetailHeader.tsx
 * Project: moovee-app
 * File Created: Friday, 29th May 2020 9:33:51 pm
 * Author: Adithya Sreyaj
 * -----
 * Last Modified: Tuesday, 2nd June 2020 9:08:24 pm
 * Modified By: Adithya Sreyaj<adi.sreyaj@gmail.com>
 * -----
 */
import React from 'react';
import { View, Image, StyleSheet, Text, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

import HeartPop from '../../components/HeartPop';
import { TYPOGRAPHY } from '../../config/typography';

export default function MovieDetailHeader() {
  return (
    <View style={styles.header}>
      <View style={styles.headerImage}>
        <Image
          style={{ resizeMode: 'cover' }}
          source={{
            uri:
              'https://m.media-amazon.com/images/M/MV5BMzFiODE0ZDUtN2IxNC00OTI5LTg4OWItZTE2MjU4ZTk2NjM5XkEyXkFqcGdeQXVyNDYzODU1ODM@._V1_.jpg',
            height: 420,
          }}
        />
      </View>
      <LinearGradient
        colors={[
          'rgba(0,0,0,0.8)',
          'rgba(0,0,0,0.4)',
          'transparent',
          'transparent',
          'transparent',
        ]}
        start={[0.5, 1]}
        end={[1, 0]}
        style={styles.headerOverlay}
      />
      <View style={styles.headerMeta}>
        <View style={styles.headerMetaSuperSet}>
          <Text style={styles.headerMetaSuperSetText}>2018</Text>
          <Text style={styles.headerMetaSuperSetText}>Action</Text>
        </View>
        <Text style={styles.movieName}>Avengers End Game</Text>
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
                  color={i < 4 ? '#f45d60' : '#f4f4f4'}
                />
              );
            })}
          <Text style={{ color: 'white', marginLeft: 4 }}>1520 Ratings</Text>
        </View>
      </View>
      <View style={styles.favoritesButton}>
        <HeartPop size={24} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 420,
  },
  headerImage: {
    zIndex: 0,
  },
  headerOverlay: {
    position: 'absolute',
    width: '100%',
    height: 420,
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
