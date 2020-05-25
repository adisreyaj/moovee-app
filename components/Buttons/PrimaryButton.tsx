/*
 * File: PrimaryButton.tsx
 * Project: moovee-app
 * File Created: Wednesday, 13th May 2020 11:28:06 pm
 * Author: Adithya Sreyaj
 * -----
 * Last Modified: Monday, 25th May 2020 1:28:19 am
 * Modified By: Adithya Sreyaj<adi.sreyaj@gmail.com>
 * -----
 */

import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { colors } from '../../config/colors';

export default function PrimaryButton() {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={styles.button}
      onPress={() => {}}
    >
      <Text style={{ color: '#fff', fontSize: 16 }}>Learn More</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    paddingHorizontal: 16,
    borderRadius: 4,
    paddingVertical: 10,
    elevation: 6,
  },
});
