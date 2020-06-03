/*
 * File: Dashboard.tsx
 * Project: moovee-app
 * File Created: Saturday, 30th May 2020 11:29:38 am
 * Author: Adithya Sreyaj
 * -----
 * Last Modified: Saturday, 30th May 2020 11:39:22 am
 * Modified By: Adithya Sreyaj<adi.sreyaj@gmail.com>
 * -----
 */

import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import BottomNavbar from '../../components/BottomNavbar/BottomNavbar';
import MovieDetail from '../MovieDetail/MovieDetail';
import FavoritesPage from '../Favorites/Favorites';
import HomePage from '../Home/Home';

const Dashboard = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBar={(props) => <BottomNavbar {...props} />}
    >
      <Tab.Screen name="HOME" component={HomePage} />
      <Tab.Screen name="MOVIE_DETAILS" component={MovieDetail} />
      <Tab.Screen name="FAVORITES" component={FavoritesPage} />
    </Tab.Navigator>
  );
};

export default Dashboard;
