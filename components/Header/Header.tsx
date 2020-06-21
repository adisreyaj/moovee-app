/*
 * File: Header.tsx
 * Project: moovee-app
 * File Created: Wednesday, 13th May 2020 9:00:06 pm
 * Author: Adithya Sreyaj
 * -----
 * Last Modified: Saturday, 30th May 2020 11:57:58 am
 * Modified By: Adithya Sreyaj<adi.sreyaj@gmail.com>
 * -----
 */

import React, { useRef, useEffect } from 'react';
import {
  View,
  Image,
  StyleSheet,
  Platform,
  StatusBar,
  Animated,
  Easing,
} from 'react-native';

const Header = () => {
  const headerSlideIn = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(headerSlideIn, {
      toValue: 100,
      easing: Easing.bezier(0.17, 0.67, 0.56, 1.03),
      duration: 1000,
    }).start();
  }, []);
  return (
    <Animated.View
      style={{
        ...styles.header,
        transform: [
          {
            translateY: headerSlideIn.interpolate({
              inputRange: [0, 100],
              outputRange: [-50, 0],
            }),
          },
        ],
      }}
    >
      <Image
        fadeDuration={500}
        source={require('../../assets/icon.png')}
        style={styles.logo}
      />

      <View>
        <Image
          style={styles.avatar}
          resizeMode={'cover'}
          source={require('../../assets/avatar.jpg')}
        />
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  header: {
    display: 'flex',
    height: 80,
    paddingLeft: 24,
    position: 'relative',
    paddingRight: 24,
    flexDirection: 'row',
    flexWrap: 'nowrap',
    // backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
    zIndex: 1,
  },
  logo: {
    width: 150,
    height: 60,
    resizeMode: 'contain',
  },
  avatar: {
    borderRadius: 50,
    overflow: 'hidden',
    width: 50,
    height: 50,
  },
});

export default Header;
