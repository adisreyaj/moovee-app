/*
 * File: Login.tsx
 * Project: moovee-app
 * File Created: Saturday, 30th May 2020 11:33:43 am
 * Author: Adithya Sreyaj
 * -----
 * Last Modified: Saturday, 30th May 2020 10:19:54 pm
 * Modified By: Adithya Sreyaj<adi.sreyaj@gmail.com>
 * -----
 */

import React, { useRef, useEffect, useState } from 'react';
import { View, Animated, Text, Easing, Image, StatusBar } from 'react-native';
import { COLORS } from '../../../config/colors';
import {
  DEVICE_HEIGHT,
  DEVICE_WIDTH,
  LOGIN_CONTAINER_HEIGHT,
} from '../../../config/constants';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';

import { TYPOGRAPHY } from '../../../config/typography';
import LoginForm from './LoginForm';
import { LinearGradient } from 'expo-linear-gradient';
import { AUTH_BUTTON } from '../Shared/styles';
import RegisterForm from './RegisterForm';

enum AuthenticationType {
  login = 'LOGIN',
  register = 'REGISTER',
}

const AuthenticationPage = () => {
  const scale = useRef(new Animated.Value(0)).current;
  const [authType, setAuthType] = useState(AuthenticationType.login);
  const loginOutputInterpolate = scale.interpolate({
    inputRange: [0, 0.3, 1],
    outputRange: [
      DEVICE_HEIGHT,
      DEVICE_HEIGHT - LOGIN_CONTAINER_HEIGHT,
      LOGIN_CONTAINER_HEIGHT / 2,
    ],
  });

  const loginOverlayOutputInterpolate = scale.interpolate({
    inputRange: [0, 0.3, 1],
    outputRange: [DEVICE_HEIGHT, DEVICE_HEIGHT - LOGIN_CONTAINER_HEIGHT, 0],
  });
  useEffect(() => {
    Animated.timing(scale, {
      toValue: 0.3,
      easing: Easing.bezier(0.17, 0.67, 0.56, 1.03),
      duration: 600,
      useNativeDriver: true,
    }).start();
  }, []);

  const openLoginContainer = (type = AuthenticationType.login) => {
    setAuthType(type);
    Animated.spring(scale, {
      toValue: 1,
      damping: 1,
      stiffness: 25,
      overshootClamping: true,
      useNativeDriver: true,
    }).start();
  };

  const closeLoginContainer = () => {
    Animated.spring(scale, {
      toValue: 0.3,
      useNativeDriver: true,
    }).start();
  };

  return (
    <Animated.View
      style={{
        width: DEVICE_WIDTH,
        height: DEVICE_HEIGHT,
      }}
    >
      <StatusBar
        translucent
        barStyle="light-content"
        backgroundColor="rgba(0,0,0,0.3)"
      />
      <Image
        source={{
          uri:
            'https://m.media-amazon.com/images/M/MV5BMzFiODE0ZDUtN2IxNC00OTI5LTg4OWItZTE2MjU4ZTk2NjM5XkEyXkFqcGdeQXVyNDYzODU1ODM@._V1_.jpg',
          width: DEVICE_WIDTH,
          height: DEVICE_HEIGHT,
        }}
      />
      <LinearGradient
        colors={[
          'rgba(0,0,0,0.8)',
          'rgba(0,0,0,0.7)',
          'transparent',
          'transparent',
        ]}
        start={[0, 0]}
        end={[0.2, 0.4]}
        style={{
          position: 'absolute',
          top: 0,
          zIndex: 0,
          left: 0,
          width: DEVICE_WIDTH,
          height: DEVICE_HEIGHT,
        }}
      />
      <View
        style={{
          height: 50,
          position: 'absolute',
          zIndex: 4,
          top: 20,
          left: 24,
          width: 150,
        }}
      >
        <Image
          style={{ width: '100%' }}
          resizeMode={'contain'}
          source={require('../../../assets/moovee_white.png')}
        />
      </View>
      <Animated.View
        style={{
          height: DEVICE_HEIGHT,
          width: DEVICE_WIDTH,
          backgroundColor: '#fff',
          position: 'absolute',
          zIndex: 1,
          bottom: 0,
          transform: [
            {
              translateY: loginOutputInterpolate,
            },
          ],
        }}
      >
        <View>
          <View style={{ padding: 24 }}>
            <Text style={{ ...TYPOGRAPHY.heading, fontSize: 24 }}>
              Welcome to MOOVEE
            </Text>
            <Text>Start by Login or Registering an account</Text>
            <Animated.View
              style={{
                flexDirection: 'row',
                marginTop: 32,
                flexGrow: 1,
                opacity: scale.interpolate({
                  inputRange: [0.3, 0.4, 1],
                  outputRange: [1, 0, 0],
                }),
                justifyContent: 'flex-start',
              }}
            >
              <TouchableOpacity
                activeOpacity={0.8}
                style={{
                  ...AUTH_BUTTON.base,
                  ...AUTH_BUTTON.primary,
                }}
                onPress={() => openLoginContainer(AuthenticationType.login)}
              >
                <Text
                  style={{
                    color: '#fff',
                    textAlign: 'center',
                    fontSize: 16,
                    ...TYPOGRAPHY.body,
                  }}
                >
                  Login
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.8}
                style={{
                  ...AUTH_BUTTON.base,
                  ...AUTH_BUTTON.stroked,
                }}
                onPress={() => openLoginContainer(AuthenticationType.register)}
              >
                <Text
                  style={{
                    color: COLORS.primary,
                    textAlign: 'center',
                    fontSize: 16,
                    ...TYPOGRAPHY.body,
                  }}
                >
                  Register
                </Text>
              </TouchableOpacity>
            </Animated.View>
            <Animated.View>
              {authType === AuthenticationType.login ? (
                <LoginForm animation={scale} />
              ) : (
                <RegisterForm animation={scale} />
              )}
            </Animated.View>
          </View>
        </View>
      </Animated.View>
      <Animated.View
        style={{
          height: DEVICE_HEIGHT,
          width: DEVICE_WIDTH,
          backgroundColor: '#fff',
          position: 'absolute',
          zIndex: 0,
          bottom: 0,
          transform: [
            {
              translateY: loginOverlayOutputInterpolate,
            },
          ],
        }}
      ></Animated.View>
      <Animated.View
        style={{
          position: 'absolute',
          top: 72,
          left: 24,
          zIndex: 5,
          opacity: scale.interpolate({
            inputRange: [0, 0.3, 0.8, 1],
            outputRange: [0, 0, 0, 1],
          }),
        }}
      >
        <TouchableOpacity
          onPress={() => closeLoginContainer()}
          style={{
            width: 40,
            height: 40,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Ionicons name="md-arrow-back" color={COLORS.primary} size={24} />
        </TouchableOpacity>
      </Animated.View>
    </Animated.View>
  );
};

export default AuthenticationPage;
