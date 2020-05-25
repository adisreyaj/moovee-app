/*
 * File: Menu.tsx
 * Project: moovee-app
 * File Created: Monday, 25th May 2020 1:42:21 am
 * Author: Adithya Sreyaj
 * -----
 * Last Modified: Monday, 25th May 2020 1:59:09 am
 * Modified By: Adithya Sreyaj<adi.sreyaj@gmail.com>
 * -----
 */

import React, { Fragment } from 'react';
import { View, StyleSheet, Text, TouchableWithoutFeedback } from 'react-native';

export default function Menu({
  visible = false,
  closeMenu,
}: {
  visible: boolean;
  closeMenu: () => void;
}) {
  return visible ? (
    <Fragment>
      <View style={styles.menu}>
        <Text>Menu</Text>
      </View>
      <TouchableWithoutFeedback onPress={closeMenu}>
        <View style={styles.backdrop}></View>
      </TouchableWithoutFeedback>
    </Fragment>
  ) : null;
}

const styles = StyleSheet.create({
  menu: {
    position: 'absolute',
    top: 24,
    left: 0,
    zIndex: 3,
    backgroundColor: '#fff',
    width: '80%',
    height: '100%',
    elevation: 2,
  },
  backdrop: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: '#000',
    opacity: 0.5,
    zIndex: 2,
  },
});
