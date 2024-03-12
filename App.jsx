import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ScrollView, TextInput } from 'react-native-web';
import { createAppContainer} from 'react-navigation';
import { createStackNavigator } from "react-navigation-stack";

import Home from './src/Home';
import About from './src/About';

const AppNavigator = createStackNavigator(
  {
    Home: { screen: Home },
    About: { screen: About },
  },
  {
    initialRouteName: 'Home',
  }
);

export default createAppContainer (AppNavigator);
