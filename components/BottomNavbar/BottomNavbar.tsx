/*
 * File: BottomNavbar.tsx
 * Project: moovee-app
 * File Created: Monday, 25th May 2020 4:00:43 pm
 * Author: Adithya Sreyaj
 * -----
 * Last Modified: Thursday, 28th May 2020 11:04:16 pm
 * Modified By: Adithya Sreyaj<adi.sreyaj@gmail.com>
 * -----
 */

import React, { useState, useRef, useEffect } from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  Animated,
  Easing,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../../config/colors';

enum BottomNavbarItems {
  home = 'HOME',
  favorites = 'FAVORITES',
  explore = 'EXPLORE',
  settings = 'SETTINGS',
}

export default function BottomNavbar() {
  const [currentSelection, setCurrentSelection] = useState(
    BottomNavbarItems.home
  );
  const menuItemAnimation = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.timing(menuItemAnimation, {
      toValue: 100,
      easing: Easing.bezier(0.17, 0.67, 0.56, 1.03),
      duration: 1000,
    }).start();
  }, []);

  const changeMenuSelection = (selection: BottomNavbarItems) => {
    setCurrentSelection(selection);
  };

  const getMenuItemTextColor = (selection: BottomNavbarItems) => {
    return selection === currentSelection ? '#fff' : COLORS.textSecondary;
  };
  const getMenuItemStyles = (selection: BottomNavbarItems) => {
    return selection === currentSelection
      ? {
          ...styles.menuItem,
          ...styles.menuItemActive,
        }
      : styles.menuItem;
  };
  return (
    <Animated.View
      style={{
        ...styles.bottomNavbar,
        transform: [
          {
            translateY: menuItemAnimation.interpolate({
              inputRange: [0, 100],
              outputRange: [50, 0],
            }),
          },
        ],
      }}
    >
      <TouchableWithoutFeedback
        style={styles.menuItemContainer}
        onPress={() => changeMenuSelection(BottomNavbarItems.home)}
      >
        <View style={getMenuItemStyles(BottomNavbarItems.home)}>
          <Ionicons
            name="md-home"
            size={24}
            color={getMenuItemTextColor(BottomNavbarItems.home)}
          />
          {currentSelection === BottomNavbarItems.home ? (
            <Text style={styles.menuItemLabel}>{BottomNavbarItems.home}</Text>
          ) : null}
        </View>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback
        style={styles.menuItemContainer}
        onPress={() => changeMenuSelection(BottomNavbarItems.favorites)}
      >
        <View style={getMenuItemStyles(BottomNavbarItems.favorites)}>
          <Ionicons
            name="md-heart"
            size={24}
            color={getMenuItemTextColor(BottomNavbarItems.favorites)}
          />
          {currentSelection === BottomNavbarItems.favorites ? (
            <Text style={styles.menuItemLabel}>
              {BottomNavbarItems.favorites}
            </Text>
          ) : null}
        </View>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback
        style={styles.menuItemContainer}
        onPress={() => changeMenuSelection(BottomNavbarItems.explore)}
      >
        <View style={getMenuItemStyles(BottomNavbarItems.explore)}>
          <Ionicons
            name="ios-apps"
            size={24}
            color={getMenuItemTextColor(BottomNavbarItems.explore)}
          />
          {currentSelection === BottomNavbarItems.explore ? (
            <Text style={styles.menuItemLabel}>
              {BottomNavbarItems.explore}
            </Text>
          ) : null}
        </View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback
        style={styles.menuItemContainer}
        onPress={() => changeMenuSelection(BottomNavbarItems.settings)}
      >
        <View style={getMenuItemStyles(BottomNavbarItems.settings)}>
          <Ionicons
            name="md-settings"
            size={24}
            color={getMenuItemTextColor(BottomNavbarItems.settings)}
          />
          {currentSelection === BottomNavbarItems.settings ? (
            <Text style={styles.menuItemLabel}>
              {BottomNavbarItems.settings}
            </Text>
          ) : null}
        </View>
      </TouchableWithoutFeedback>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  bottomNavbar: {
    height: 70,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 32,
    elevation: 5,
    backgroundColor: '#fff',
  },

  menuItemContainer: {
    borderRadius: 50,
  },
  menuItem: {
    display: 'flex',
    borderRadius: 50,
    paddingVertical: 8,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuItemActive: {
    backgroundColor: COLORS.primary,
    borderRadius: 60,
  },
  menuItemLabel: {
    textTransform: 'capitalize',
    marginLeft: 12,
    color: '#fff',
    fontSize: 16,
  },
});
