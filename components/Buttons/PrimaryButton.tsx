/*
 * File: PrimaryButton.tsx
 * Project: moovee-app
 * File Created: Wednesday, 13th May 2020 11:28:06 pm
 * Author: Adithya Sreyaj
 * -----
 * Last Modified: Saturday, 30th May 2020 1:36:43 am
 * Modified By: Adithya Sreyaj<adi.sreyaj@gmail.com>
 * -----
 */

import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Dimensions } from 'react-native';
import { COLORS } from '../../config/colors';

const { width: deviceW } = Dimensions.get('window');
export default function PrimaryButton({ clicked }) {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={styles.button}
      onPress={() => {
        clicked();
      }}
    >
      <Text style={{ color: '#fff', fontSize: deviceW > 450 ? 16 : 14 }}>
        Learn More
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: COLORS.primary,
    paddingHorizontal: 16,
    borderRadius: 4,
    paddingVertical: 10,
    elevation: 6,
  },
});
