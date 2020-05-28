/*
 * File: MovieDetail.tsx
 * Project: moovee-app
 * File Created: Thursday, 28th May 2020 11:15:22 pm
 * Author: Adithya Sreyaj
 * -----
 * Last Modified: Thursday, 28th May 2020 11:56:33 pm
 * Modified By: Adithya Sreyaj<adi.sreyaj@gmail.com>
 * -----
 */

import React from 'react';
import { View, ScrollView, Image, StyleSheet, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function MovieDetail() {
  return (
    <ScrollView>
      <View style={styles.header}>
        <View style={styles.headerImage}>
          <Image
            source={{
              uri:
                'https://images-na.ssl-images-amazon.com/images/I/A1t8xCe9jwL._AC_SL1500_.jpg',
              height: 500,
            }}
          />
        </View>
        <LinearGradient
          colors={[
            'rgba(0,0,0,0.8)',
            'rgba(0,0,0,0.2)',
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
          <Text style={styles.movieTagName}>Ride together. Die together.</Text>
          <Text style={styles.movieDuration}>2h 38min</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 500,
    position: 'relative',
  },
  headerImage: {},
  headerOverlay: {
    position: 'absolute',
    width: '100%',
    height: 500,
    zIndex: 2,
  },
  headerMeta: {
    position: 'absolute',
    paddingHorizontal: 24,
    bottom: 32,
    zIndex: 3,
  },
  headerMetaSuperSet: {
    flexDirection: 'row',
  },
  headerMetaSuperSetText: {
    color: '#fff',
    fontSize: 18,
    marginRight: 12,
  },
  movieName: {
    fontSize: 42,
    color: '#fff',
    fontWeight: '700',
  },
  movieTagName: {
    color: '#fff',
  },
  movieDuration: {
    color: '#fff',
  },
});
