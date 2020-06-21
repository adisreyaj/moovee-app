/*
 * File: App.tsx
 * Project: moovee-app
 * File Created: Tuesday, 12th May 2020 12:38:42 am
 * Author: Adithya Sreyaj
 * -----
 * Last Modified: Wednesday, 3rd June 2020 8:41:48 pm
 * Modified By: Adithya Sreyaj<adi.sreyaj@gmail.com>
 * -----
 */

import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { AppLoading } from 'expo';
import { loadAsync } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import Dashboard from './screens/Dashboard/Dashboard';
import SignupPage from './screens/Authentication/Signup/Signup';
import AuthenticationPage from './screens/Authentication/Login/Authentication';
import moviesReducer from './store/reducers/movies';

const rootReducer = combineReducers({
  movies: moviesReducer,
});

const store = createStore(rootReducer);

const loadFonts = () => {
  return loadAsync({
    Inter: require('./assets/fonts/Inter-Regular.ttf'),
    'Inter-SemiBold': require('./assets/fonts/Inter-Medium.ttf'),
    'Inter-Bold': require('./assets/fonts/Inter-Bold.ttf'),
  });
};

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
    <Provider store={store}>
      <NavigationContainer>
        <View style={styles.container}>
          <Stack.Navigator initialRouteName="LOGIN" headerMode="none">
            <Stack.Screen name="MAIN" component={Dashboard} />
            <Stack.Screen name="LOGIN" component={AuthenticationPage} />
            <Stack.Screen name="SIGNUP" component={SignupPage} />
          </Stack.Navigator>
        </View>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
