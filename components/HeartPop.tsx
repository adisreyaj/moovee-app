/*
 * File: HeartPop.tsx
 * Project: moovee-app
 * File Created: Friday, 29th May 2020 8:44:07 pm
 * Author: Adithya Sreyaj
 * -----
 * Last Modified: Friday, 29th May 2020 10:38:47 pm
 * Modified By: Adithya Sreyaj<adi.sreyaj@gmail.com>
 * -----
 */

import React, { useRef, useState } from 'react';
import {
  View,
  Animated,
  StyleSheet,
  Easing,
  TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function HeartPop({ size = 24 }: { size: number }) {
  const heartAnimation = useRef(new Animated.Value(0)).current;
  const [hearted, setHearted] = useState(false);
  const styles = StyleSheet.create({
    heart: {
      transform: [
        {
          scale: heartAnimation.interpolate({
            inputRange: [0, 100],
            outputRange: [0, 1.2],
            easing: Easing.bezier(0.19, 0.71, 0.52, 1.06),
            extrapolate: 'clamp',
          }),
        },
      ],
    },
  });

  const startAnimation = () => {
    console.log('Hearted');
    setHearted((currentState) => !currentState);
    if (!hearted)
      Animated.sequence([
        Animated.timing(heartAnimation, {
          toValue: 0,
          duration: 50,
        }),
        Animated.spring(heartAnimation, {
          toValue: 100,
          bounciness: 8,
          speed: 2,
        }),
      ]).start();
  };

  return (
    <View>
      <Animated.View style={styles.heart}>
        <TouchableOpacity onPress={() => startAnimation()}>
          {hearted ? (
            <Ionicons name="ios-heart" size={size} color="#E2475F" />
          ) : (
            <Ionicons name="ios-heart" size={size} color="#d1d1d1" />
          )}
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
}
