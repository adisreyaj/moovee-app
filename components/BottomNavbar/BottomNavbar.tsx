/*
 * File: BottomNavbar.tsx
 * Project: moovee-app
 * File Created: Monday, 25th May 2020 4:00:43 pm
 * Author: Adithya Sreyaj
 * -----
 * Last Modified: Monday, 25th May 2020 10:08:31 pm
 * Modified By: Adithya Sreyaj<adi.sreyaj@gmail.com>
 * -----
 */

import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableHighlight } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
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

  const changeMenuSelection = (selection: BottomNavbarItems) => {
    setCurrentSelection(selection);
  };

  const getMenuItemTextColor = (selection: BottomNavbarItems) => {
    return selection === currentSelection ? '#fff' : COLORS.textSecondary;
  };
  const getMenuItemColor = (selection: BottomNavbarItems) => {
    return selection === currentSelection
      ? { ...styles.menuItem, ...styles.menuItemActive }
      : styles.menuItem;
  };
  return (
    <View style={styles.bottomNavbar}>
      <TouchableHighlight
        style={styles.menuItemContainer}
        activeOpacity={0.8}
        underlayColor={COLORS.primary}
        onPress={() => changeMenuSelection(BottomNavbarItems.home)}
      >
        <View style={getMenuItemColor(BottomNavbarItems.home)}>
          <Ionicons
            name="md-home"
            size={24}
            color={getMenuItemTextColor(BottomNavbarItems.home)}
          />
          {currentSelection === BottomNavbarItems.home ? (
            <Text style={styles.menuItemLabel}>{BottomNavbarItems.home}</Text>
          ) : null}
        </View>
      </TouchableHighlight>

      <TouchableHighlight
        style={styles.menuItemContainer}
        activeOpacity={0.8}
        underlayColor={COLORS.primary}
        onPress={() => changeMenuSelection(BottomNavbarItems.favorites)}
      >
        <View style={getMenuItemColor(BottomNavbarItems.favorites)}>
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
      </TouchableHighlight>

      <TouchableHighlight
        style={styles.menuItemContainer}
        activeOpacity={0.8}
        underlayColor={COLORS.primary}
        onPress={() => changeMenuSelection(BottomNavbarItems.explore)}
      >
        <View style={getMenuItemColor(BottomNavbarItems.explore)}>
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
      </TouchableHighlight>
      <TouchableHighlight
        style={styles.menuItemContainer}
        activeOpacity={0.8}
        underlayColor={COLORS.primary}
        onPress={() => changeMenuSelection(BottomNavbarItems.settings)}
      >
        <View style={getMenuItemColor(BottomNavbarItems.settings)}>
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
      </TouchableHighlight>
    </View>
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
    backgroundColor: COLORS.accent,
  },
  menuItemLabel: {
    textTransform: 'capitalize',
    marginLeft: 12,
    color: '#fff',
    fontSize: 16,
  },
});
