/*
 * File: App.tsx
 * Project: moovee-app
 * File Created: Tuesday, 12th May 2020 12:38:42 am
 * Author: Adithya Sreyaj
 * -----
 * Last Modified: Saturday, 30th May 2020 9:21:49 pm
 * Modified By: Adithya Sreyaj<adi.sreyaj@gmail.com>
 * -----
 */

import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { AppLoading } from 'expo';
import { loadAsync } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Dashboard from './pages/Dashboard/Dashboard';
import SignupPage from './pages/Authentication/Signup/Signup';
import AuthenticationPage from './pages/Authentication/Login/Authentication';

function loadFonts() {
  return loadAsync({
    Inter: require('./assets/fonts/Inter-Regular.ttf'),
    'Inter-SemiBold': require('./assets/fonts/Inter-Medium.ttf'),
    'Inter-Bold': require('./assets/fonts/Inter-Bold.ttf'),
  });
}

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const Stack = createStackNavigator();
  if (!fontsLoaded)
    return (
      <AppLoading
        startAsync={loadFonts}
        onFinish={() => {
          setFontsLoaded(true);
        }}
      />
    );
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <Stack.Navigator initialRouteName="LOGIN" headerMode="none">
          <Stack.Screen name="MAIN" component={Dashboard} />
          <Stack.Screen name="LOGIN" component={AuthenticationPage} />
          <Stack.Screen name="SIGNUP" component={SignupPage} />
        </Stack.Navigator>
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
