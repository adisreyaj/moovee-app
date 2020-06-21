/*
 * File: MovieDetail.tsx
 * Project: moovee-app
 * File Created: Thursday, 28th May 2020 11:15:22 pm
 * Author: Adithya Sreyaj
 * -----
 * Last Modified: Friday, 5th June 2020 11:08:41 pm
 * Modified By: Adithya Sreyaj<adi.sreyaj@gmail.com>
 * -----
 */

import React from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  Text,
  StatusBar,
  Dimensions,
} from 'react-native';
import MovieDetailHeader from './MovieDetailHeader';
import { TYPOGRAPHY } from '../../config/typography';
import { DEVICE_HEIGHT, DEVICE_WIDTH } from '../../config/constants';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';

export default function MovieDetail({ route }) {
  const movieData = route.params.data;
  console.log({ movieData });

  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor="rgba(0,0,0,0.7)" />
      <ScrollView>
        <MovieDetailHeader {...movieData} />
        <View
          style={{
            paddingTop: 32,
            paddingHorizontal: 24,
            height: DEVICE_HEIGHT - 729,
            position: 'relative',
          }}
        >
          <LinearGradient
            colors={[
              'rgba(0,0,0,1)',
              'rgba(0,0,0,1)',
              'rgba(0,0,0,0.9)',
              'rgba(0,0,0,0.6)',
              'transparent',
              'transparent',
            ]}
            start={[0.5, 1]}
            end={[1, 0]}
            style={{
              position: 'absolute',
              top: -350,
              width: DEVICE_WIDTH,
              height: DEVICE_HEIGHT - 300,
            }}
          />
          <View>
            <Text
              style={{
                fontSize: 24,
                fontWeight: '700',
                marginBottom: 8,
                color: '#fff',
              }}
            >
              Overview
            </Text>
            <Text style={{ lineHeight: 20, ...TYPOGRAPHY.body, color: '#fff' }}>
              {movieData.overview}
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});
