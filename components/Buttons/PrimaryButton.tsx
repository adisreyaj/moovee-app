/*
 * File: PrimaryButton.tsx
 * Project: moovee-app
 * File Created: Wednesday, 13th May 2020 11:28:06 pm
 * Author: Adithya Sreyaj
 * -----
 * Last Modified: Wednesday, 13th May 2020 11:54:38 pm
 * Modified By: Adithya Sreyaj<adi.sreyaj@gmail.com>
 * -----
 */

import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { colors } from '../../config/colors';

export default function PrimaryButton() {
  return (
    <TouchableOpacity style={styles.button} onPress={() => {}}>
      <Text style={{ color: '#fff', fontSize: 16 }}>Learn More</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    paddingHorizontal: 24,
    borderRadius: 4,
    paddingVertical: 10,
    elevation: 6,
  },
});
