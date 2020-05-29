/*
 * File: MovieDetail.tsx
 * Project: moovee-app
 * File Created: Thursday, 28th May 2020 11:15:22 pm
 * Author: Adithya Sreyaj
 * -----
 * Last Modified: Friday, 29th May 2020 10:36:59 pm
 * Modified By: Adithya Sreyaj<adi.sreyaj@gmail.com>
 * -----
 */

import React from 'react';
import { View, ScrollView, StyleSheet, Text, StatusBar } from 'react-native';
import MovieDetailHeader from './MovieDetailHeader';
import Constants from 'expo-constants';
import { TYPOGRAPHY } from '../../config/typography';

export default function MovieDetail() {
  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor="rgba(0,0,0,0.7)" />
      <ScrollView>
        <MovieDetailHeader />
        <View
          style={{
            paddingTop: 32,
            paddingHorizontal: 24,
          }}
        >
          <View>
            <Text style={{ fontSize: 24, fontWeight: '700', marginBottom: 8 }}>
              Overview
            </Text>
            <Text style={{ lineHeight: 20, ...TYPOGRAPHY.body }}>
              Marcus and Mike are forced to confront new threats, career
              changes, and midlife crises as they join the newly created elite
              team AMMO of the Miami police department to take down the ruthless
              Armando Armas, the vicious leader of a Miami drug cartel.
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
