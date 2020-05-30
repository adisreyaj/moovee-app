/*
 * File: styles.ts
 * Project: moovee-app
 * File Created: Saturday, 30th May 2020 9:04:28 pm
 * Author: Adithya Sreyaj
 * -----
 * Last Modified: Saturday, 30th May 2020 9:11:35 pm
 * Modified By: Adithya Sreyaj<adi.sreyaj@gmail.com>
 * -----
 */

import { StyleSheet } from 'react-native';
import { DEVICE_WIDTH } from '../../../config/constants';
import { COLORS } from '../../../config/colors';

export const AUTH_BUTTON = StyleSheet.create({
  base: {
    justifyContent: 'center',
    paddingVertical: 16,
    width: DEVICE_WIDTH / 2.5,
    marginRight: 12,
    borderRadius: 8,
  },
  primary: {
    backgroundColor: COLORS.primary,
  },
  stroked: {
    paddingVertical: 12,
    borderColor: COLORS.primary,
    borderWidth: 4,
  },
});
