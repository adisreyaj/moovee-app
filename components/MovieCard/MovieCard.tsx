/*
 * File: MovieCard.tsx
 * Project: moovee-app
 * File Created: Wednesday, 13th May 2020 9:18:24 pm
 * Author: Adithya Sreyaj
 * -----
 * Last Modified: Friday, 5th June 2020 10:52:03 pm
 * Modified By: Adithya Sreyaj<adi.sreyaj@gmail.com>
 * -----
 */

import React from 'react';
import { View, Image, Text, StyleSheet, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../../config/colors';
import PrimaryButton from '../Buttons/PrimaryButton';
import { useNavigation } from '@react-navigation/native';

export default function MovieCard({ data }: any) {
  const { width: deviceW } = Dimensions.get('window');
  const navigation = useNavigation();
  return (
    <View style={styles.movieCard}>
      <Image
        resizeMode={'cover'}
        source={{
          width: 300,
          height: deviceW > 400 ? 300 : 200,
          uri: `https://image.tmdb.org/t/p/w300${data.poster_path}`,
        }}
        style={{
          width: '100%',
          maxHeight: 300,
        }}
      />
      <Text style={styles.title} numberOfLines={1}>
        {data.title}
      </Text>
      <Text style={styles.date}>{data.release_date}</Text>
      <View
        style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}
      >
        <Ionicons name="md-star" size={18} color="green" />
        <Text style={styles.rating}>{data.vote_average}</Text>
      </View>
      <View style={styles.footer}>
        <PrimaryButton
          clicked={() => navigation.navigate('MOVIE_DETAILS', { data })}
        />
        <Ionicons name="md-heart" size={24} color="#E2475F" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  movieCard: {
    margin: 6,
    flex: 0.5,
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 4,
    maxWidth: 250,
    elevation: 0,
  },
  title: {
    color: COLORS.textPrimary,
    fontSize: 18,
    fontWeight: '700',
    marginTop: 8,
    marginBottom: 8,
  },
  date: {
    color: COLORS.textSecondary,
    fontSize: 16,
    marginBottom: 4,
  },
  rating: {
    color: COLORS.textSecondary,
    fontSize: 16,
    marginLeft: 2,
  },
  footer: {
    marginTop: 24,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
